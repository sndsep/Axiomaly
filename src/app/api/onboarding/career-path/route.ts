// src/app/api/onboarding/career-path/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { CareerPath, OnboardingStep } from '@/types/onboarding';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    console.log('Received body:', body);

    const careerPath = body.careerPath as CareerPath;
    if (!careerPath || !Object.values(CareerPath).includes(careerPath)) {
      return NextResponse.json(
        { success: false, error: 'Invalid career path' },
        { status: 400 }
      );
    }

    // Update user and create/update onboarding progress
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        careerPath,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: OnboardingStep.CAREER_PATH,
              completed: false,
              responses: {},
              selectedSpecializations: [],
            },
            update: {
              currentStep: OnboardingStep.CAREER_PATH,
              responses: {},
            },
          },
        },
      },
      include: {
        onboardingProgress: true,
      },
    });

    // Determine next path based on career path
    const nextPath = careerPath === CareerPath.SHORT_COURSE 
      ? 'short-course/survey'
      : 'comprehensive-survey';

    console.log('API Response:', {
      success: true,
      data: { user, progress: user.onboardingProgress },
      nextPath,
    });

    return NextResponse.json({
      success: true,
      data: { user, progress: user.onboardingProgress },
      nextPath,
    });
    
  } catch (error) {
    console.error('Career path selection error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        onboardingProgress: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        careerPath: user.careerPath,
        currentStep: user.onboardingProgress?.currentStep,
        completed: user.hasCompletedOnboarding,
      },
    });

  } catch (error) {
    console.error('Error fetching career path:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}