// src/app/api/courses/[courseId]/lessons/[lessonId]/submissions/[submissionId]/feedback/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';

const feedbackSchema = z.object({
  comment: z.string(),
  grade: z.number().min(0).max(100).optional(),
  status: z.enum(['APPROVED', 'NEEDS_REVISION', 'REJECTED']),
  privateNotes: z.string().optional()
});

export async function POST(
  req: Request,
  { params }: { params: { courseId: string; lessonId: string; submissionId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Verify instructor
    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      select: { instructorId: true }
    });

    if (!course || course.instructorId !== session.user.id) {
      return new NextResponse('Forbidden - Instructor only', { status: 403 });
    }

    const json = await req.json();
    const body = feedbackSchema.parse(json);

    const feedback = await prisma.$transaction(async (tx) => {
      // Update submission with feedback
      const updatedSubmission = await tx.lessonSubmission.update({
        where: { id: params.submissionId },
        data: {
          feedback: body.comment,
          grade: body.grade,
          status: body.status,
          instructorNotes: body.privateNotes,
          reviewedAt: new Date()
        },
        include: {
          enrollment: {
            include: {
              user: {
                select: {
                  email: true,
                  name: true
                }
              }
            }
          }
        }
      });

      // If submission is approved, update lesson progress
      if (body.status === 'APPROVED') {
        await tx.lessonProgress.update({
          where: {
            lessonId_enrollmentId: {
              lessonId: params.lessonId,
              enrollmentId: updatedSubmission.enrollmentId
            }
          },
          data: {
            completed: true,
            completedAt: new Date()
          }
        });
      }

      // Create notification for student
      await tx.notification.create({
        data: {
          userId: updatedSubmission.enrollment.user.id,
          type: 'SUBMISSION_FEEDBACK',
          title: 'Feedback Received',
          message: `You've received feedback on your submission for ${params.lessonId}`,
          metadata: {
            courseId: params.courseId,
            lessonId: params.lessonId,
            submissionId: params.submissionId,
            status: body.status
          }
        }
      });

      return updatedSubmission;
    });

    return NextResponse.json(feedback);

  } catch (error) {
    console.error('[FEEDBACK_POST]', error);
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid request data', { status: 422 });
    }
    return new NextResponse('Internal error', { status: 500 });
  }
}