// src/app/api/onboarding/survey/route.ts
// this is the survey route for the onboarding process

import { authOptions } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server";
import { z } from 'zod';
import { OnboardingStep } from '@prisma/client';

const surveySchema = z.object({
  experienceLevel: z.string(),
  interests: z.array(z.string()).min(1),
  weeklyHours: z.number().min(1).max(40),
  goals: z.array(z.string()).default([]), // Made goals optional with default empty array
  // Optional fields for degree program
  specializations: z.array(z.string()).optional(),
  careerGoals: z.array(z.string()).optional(),
  timeCommitment: z.number().optional(),
  priorEducation: z.string().optional(),
  portfolioUrl: z.string().url().optional(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = surveySchema.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { onboardingProgress: true }
    });

    if (!user?.careerPath) {
      return NextResponse.json({ error: 'Career path not selected' }, { status: 400 });
    }

    const nextStep = user.careerPath === 'SHORT_COURSE' ? 'RECOMMENDATIONS' : 'PROFILE';

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        surveyResponse: {
          upsert: {
            create: {
              ...data,
              careerPath: user.careerPath,
            },
            update: {
              ...data,
              careerPath: user.careerPath,
            }
          }
        },
        onboardingProgress: {
          update: {
            currentStep: nextStep as OnboardingStep,
            responses: {
              ...user.onboardingProgress?.responses,
              survey: data
            }
          }
        }
      },
      include: {
        onboardingProgress: true,
        surveyResponse: true
      }
    });

    return NextResponse.json({ 
      success: true,
      user: updatedUser,
      nextStep: `/onboarding/${nextStep.toLowerCase()}`
    });
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const surveyData = await prisma.surveyResponse.findUnique({
      where: { userId: session.user.id },
    });

    if (!surveyData) {
      return NextResponse.json({ error: 'No survey data found' }, { status: 404 });
    }

    return NextResponse.json(surveyData);
  } catch (error) {
    console.error('Error fetching survey data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}