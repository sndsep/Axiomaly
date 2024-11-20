// src/app/api/onboarding/survey/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { OnboardingStep } from '@prisma/client';
import { z } from 'zod';

const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1),
  weeklyHours: z.coerce.number().min(5).max(40),
  priorExperience: z.string().min(10),
  industryFocus: z.array(z.string()).min(1),
  softwareExperience: z.array(z.string()),
  preferredLearningStyle: z.enum(['visual', 'hands-on', 'theoretical', 'mixed'])
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await request.json();
    const validatedData = surveySchema.parse(data);

    await prisma.onboardingProgress.upsert({
      where: {
        userId: session.user.id,
      },
      create: {
        userId: session.user.id,
        currentStep: OnboardingStep.RECOMMENDATIONS,
        responses: validatedData,
      },
      update: {
        currentStep: OnboardingStep.RECOMMENDATIONS,
        responses: validatedData,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing survey:', error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Server Error", 
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const progress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id },
    });

    return NextResponse.json({ responses: progress?.responses || null });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}