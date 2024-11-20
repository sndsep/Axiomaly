import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  availability: z.array(z.string()).min(1, 'Select at least one availability option'),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const data = surveySchema.parse(body);

    // Update user and onboarding progress
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'RECOMMENDATIONS',
              completed: false,
              responses: {
                shortCourseSurvey: data
              }
            },
            update: {
              currentStep: 'RECOMMENDATIONS',
              responses: {
                shortCourseSurvey: data
              }
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      user 
    });

  } catch (error) {
    console.error('Survey submission error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to save survey responses' }, { status: 500 });
  }
} 