// src/app/api/courses/[courseId]/lessons/[lessonId]/submissions/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';

const submissionSchema = z.object({
  files: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
    type: z.string()
  })),
  notes: z.string().optional(),
  milestoneId: z.string().optional() // For project submissions
});

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
    const body = submissionSchema.parse(json);

    // Verify enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: params.courseId
        }
      }
    });

    if (!enrollment) {
      return new NextResponse('Not enrolled in course', { status: 403 });
    }

    const submission = await prisma.$transaction(async (tx) => {
      // Create submission
      const submission = await tx.lessonSubmission.create({
        data: {
          lessonId: params.lessonId,
          enrollmentId: enrollment.id,
          files: body.files,
          notes: body.notes,
          milestoneId: body.milestoneId,
          status: 'SUBMITTED'
        }
      });

      // Update lesson progress
      await tx.lessonProgress.upsert({
        where: {
          lessonId_enrollmentId: {
            lessonId: params.lessonId,
            enrollmentId: enrollment.id
          }
        },
        create: {
          lessonId: params.lessonId,
          enrollmentId: enrollment.id,
          completed: true,
          completedAt: new Date()
        },
        update: {
          completed: true,
          completedAt: new Date()
        }
      });

      return submission;
    });

    return NextResponse.json(submission);

  } catch (error) {
    console.error('[SUBMISSION_POST]', error);
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid request data', { status: 422 });
    }
    return new NextResponse('Internal error', { status: 500 });
  }
}

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
      }
    });

    if (!enrollment) {
      return new NextResponse('Not enrolled in course', { status: 403 });
    }

    const submissions = await prisma.lessonSubmission.findMany({
      where: {
        lessonId: params.lessonId,
        enrollmentId: enrollment.id
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(submissions);

  } catch (error) {
    console.error('[SUBMISSION_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}