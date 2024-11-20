// src/app/api/user/onboarding/journey/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const journeySchema = z.object({
  careerPath: z.enum(['SHORT_COURSE', 'DEGREE_PROGRAM']),
  preferences: z.object({
    experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
    interests: z.array(z.string()),
    weeklyHours: z.number(),
    goals: z.array(z.string()),
    // Optional fields for degree program
    specialization: z.enum(['generalist', 'animation', 'fx', 'lighting', 'compositing']).optional(),
    preferredSchedule: z.enum(['fulltime', 'parttime', 'weekend']).optional(),
    mentorshipPreference: z.enum(['required', 'optional', 'none']).optional(),
  }),
  step: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = journeySchema.parse(body);

    // Get current onboarding progress
    const currentProgress = await prisma.onboardingProgress.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    // Update user preferences and onboarding progress
    const [updatedUser, updatedProgress] = await prisma.$transaction([
      prisma.user.update({
        where: { id: session.user.id },
        data: {
          careerPath: validatedData.careerPath,
          onboardingData: {
            // Merge with existing data if any
            ...(currentProgress?.responses as object || {}),
            preferences: validatedData.preferences,
          },
        },
      }),
      prisma.onboardingProgress.upsert({
        where: {
          userId: session.user.id,
        },
        create: {
          userId: session.user.id,
          currentStep: validatedData.step,
          responses: {
            preferences: validatedData.preferences,
          },
          // Mark specific steps as completed
          completedSteps: ['career-path', 'interests'],
        },
        update: {
          currentStep: validatedData.step,
          responses: {
            // Merge with existing responses
            ...(currentProgress?.responses as object || {}),
            preferences: validatedData.preferences,
          },
          completedSteps: {
            push: ['interests'],
          },
        },
      }),
    ]);

    return NextResponse.json({
      message: 'Journey preferences saved successfully',
      user: {
        id: updatedUser.id,
        careerPath: updatedUser.careerPath,
      },
      progress: {
        currentStep: updatedProgress.currentStep,
        completedSteps: updatedProgress.completedSteps,
      },
    });
  } catch (error) {
    console.error('Error saving journey preferences:', error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse(
        JSON.stringify({
          error: 'Invalid data format',
          details: error.errors,
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
}

// GET endpoint to fetch current journey progress
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const progress = await prisma.onboardingProgress.findUnique({
      where: {
        userId: session.user.id,
      },
      select: {
        currentStep: true,
        completedSteps: true,
        responses: true,
      },
    });

    if (!progress) {
      return new NextResponse(
        JSON.stringify({ error: 'Progress not found' }),
        { status: 404 }
      );
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error('Error fetching journey progress:', error);
    
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
}