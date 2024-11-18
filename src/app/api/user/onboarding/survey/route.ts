// src/app/api/user/onboarding/survey/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';

const surveySchema = z.object({
  experienceLevel: z.string(),
  interests: z.array(z.string()),
  specializations: z.array(z.string()),
  careerGoals: z.array(z.string()),
  priorExperience: z.string().optional(),
  education: z.string().optional(),
  portfolio: z.string().url().optional(),
  weeklyHours: z.number().min(1).max(40),
  industryPreference: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const data = surveySchema.parse(body);

    // Update survey responses and progress
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        surveyResponse: {
          upsert: {
            create: {
              ...data,
              updatedAt: new Date(),
            },
            update: {
              ...data,
              updatedAt: new Date(),
            }
          }
        },
        onboardingProgress: {
          update: {
            currentStep: 'RECOMMENDATIONS',
            updatedAt: new Date(),
          }
        }
      },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error('Survey submission error:', error);
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors);
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to save survey responses' },
      { status: 500 }
    );
  }
}