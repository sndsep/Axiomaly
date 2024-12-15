// src/app/api/courses/[courseId]/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';
import { Role } from '@prisma/client';

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      include: {
        lessons: {
          orderBy: { order: 'asc' }
        },
        category: true,
        instructor: {
          select: {
            id: true,
            name: true,
            image: true
          }
        },
        resources: true,
        _count: {
          select: {
            enrollments: true,
            reviews: true
          }
        }
      }
    });

    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }

    return NextResponse.json(course);

  } catch (error) {
    console.error('[COURSE_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const courseId = params.courseId;
    const json = await req.json();
    const body = courseSchema.parse(json);

    // Verify course ownership
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: { instructorId: true }
    });

    if (!course || course.instructorId !== session.user.id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Update course and lessons in a transaction
    const updatedCourse = await prisma.$transaction(async (tx) => {
      // Delete existing lessons
      await tx.lesson.deleteMany({
        where: { courseId }
      });

      // Update course
      const updated = await tx.course.update({
        where: { id: courseId },
        data: {
          title: body.title,
          description: body.description,
          thumbnail: body.thumbnail,
          duration: body.duration,
          price: body.price ? new Decimal(body.price) : null,
          level: body.level,
          categoryId: body.categoryId,
          lessons: {
            create: body.lessons.map((lesson, index) => ({
              title: lesson.title,
              description: lesson.description,
              content: lesson.content,
              duration: lesson.duration,
              order: lesson.order || index,
              type: lesson.type,
              videoUrl: lesson.type === 'VIDEO' ? lesson.videoUrl : null,
              quizData: lesson.type === 'QUIZ' ? lesson.quizData : null,
              assignment: ['ASSIGNMENT', 'PROJECT'].includes(lesson.type) ? lesson.assignment : null,
            }))
          }
        },
        include: {
          lessons: {
            orderBy: { order: 'asc' }
          },
          category: true,
          instructor: {
            select: {
              id: true,
              name: true,
              image: true
            }
          }
        }
      });

      return updated;
    });

    return NextResponse.json(updatedCourse);

  } catch (error) {
    console.error('[COURSE_PUT]', error);
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid request data', { status: 422 });
    }
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Verify course ownership
    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      select: { instructorId: true }
    });

    if (!course || course.instructorId !== session.user.id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Delete course (this will cascade delete lessons due to the relation)
    await prisma.course.delete({
      where: { id: params.courseId }
    });

    return new NextResponse(null, { status: 204 });

  } catch (error) {
    console.error('[COURSE_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}