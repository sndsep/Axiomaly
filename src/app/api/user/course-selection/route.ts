//src/app/api/user/course-selection/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

const courseSelectionSchema = z.object({
  courseIds: z.array(z.string()).min(1)
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { courseIds } = courseSelectionSchema.parse(body);

    // Create enrollments and update onboarding progress
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        enrollments: {
          createMany: {
            data: courseIds.map(courseId => ({
              courseId,
              status: 'ACTIVE',
              lessonId: '', // You'll need to determine the first lesson ID
              progress: 0
            }))
          }
        },
        onboardingProgress: {
          update: {
            currentStep: 'PROFILE',
            responses: {
              selectedCourses: courseIds,
              courseSelectionCompleted: true
            }
          }
        }
      }
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Course selection error:', error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid course selection', { status: 400 });
    }

    return new NextResponse('Internal server error', { status: 500 });
  }
}