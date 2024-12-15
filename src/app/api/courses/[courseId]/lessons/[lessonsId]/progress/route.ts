// src/app/api/courses/[courseId]/lessons/[lessonId]/progress/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';

const progressSchema = z.object({
  completed: z.boolean()
});

export async function GET(
  req: Request,
  { params }: { params: { courseId: string; lessonId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: params.courseId
        }
      },
      include: {
        lessonProgress: {
          where: {
            lessonId: params.lessonId
          }
        }
      }
    });

    if (!enrollment) {
      return new NextResponse('Enrollment not found', { status: 404 });
    }

    const progress = enrollment.lessonProgress[0];

    return NextResponse.json({
      completed: progress?.completed ?? false,
      completedAt: progress?.completedAt
    });

  } catch (error) {
    console.error('[LESSON_PROGRESS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { courseId: string; lessonId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const json = await req.json();
    const body = progressSchema.parse(json);

    const progress = await prisma.$transaction(async (tx) => {
      // Find enrollment
      const enrollment = await tx.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: session.user.id,
            courseId: params.courseId
          }
        }
      });

      if (!enrollment) {
        throw new Error('Enrollment not found');
      }

      // Update lesson progress
      const lessonProgress = await tx.lessonProgress.upsert({
        where: {
          lessonId_enrollmentId: {
            lessonId: params.lessonId,
            enrollmentId: enrollment.id
          }
        },
        create: {
          lessonId: params.lessonId,
          enrollmentId: enrollment.id,
          completed: body.completed,
          completedAt: body.completed ? new Date() : null
        },
        update: {
          completed: body.completed,
          completedAt: body.completed ? new Date() : null
        }
      });

      // Calculate overall course progress
      const totalLessons = await tx.lesson.count({
        where: { courseId: params.courseId }
      });

      const completedLessons = await tx.lessonProgress.count({
        where: {
          enrollmentId: enrollment.id,
          completed: true
        }
      });

      const progress = (completedLessons / totalLessons) * 100;

      // Update enrollment progress
      await tx.enrollment.update({
        where: { id: enrollment.id },
        data: {
          progress,
          status: progress === 100 ? 'COMPLETED' : 'ACTIVE'
        }
      });

      return lessonProgress;
    });

    return NextResponse.json(progress);

  } catch (error) {
    console.error('[LESSON_PROGRESS_POST]', error);
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid request data', { status: 422 });
    }
    return new NextResponse('Internal error', { status: 500 });
  }
}