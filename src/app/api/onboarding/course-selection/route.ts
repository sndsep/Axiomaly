// src/app/api/onboarding/course-selection/route.ts
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
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { courseIds } = courseSelectionSchema.parse(await req.json());

    // Get first lesson for each course
    const coursesWithLessons = await prisma.course.findMany({
      where: { id: { in: courseIds } },
      include: {
        lessons: {
          take: 1,
          orderBy: { createdAt: 'asc' }
        }
      }
    });

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        enrollments: {
          createMany: {
            data: coursesWithLessons.map(course => ({
              courseId: course.id,
              status: 'ACTIVE',
              lessonId: course.lessons[0]?.id,
              progress: 0
            }))
          }
        },
        onboardingProgress: {
          update: {
            currentStep: 'PROFILE',
            responses: {
              selectedCourses: courseIds,
              courseSelectionCompleted: true,
              selectedAt: new Date().toISOString()
            }
          }
        }
      },
      include: {
        enrollments: true,
        onboardingProgress: true
      }
    });

    return NextResponse.json({ 
      success: true,
      user: updatedUser,
      nextStep: '/onboarding/profile'
    });

  } catch (error) {
    console.error('Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}