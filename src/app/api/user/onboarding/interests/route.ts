// File: src/app/api/user/onboarding/interests/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const interestSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1),
  weeklyHours: z.number().min(1).max(40),
  goals: z.array(z.string()).min(1),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const validatedData = interestSchema.parse(body);

    // Update user preferences and onboarding progress
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        preferences: {
          upsert: {
            create: {
              learningPath: validatedData.experienceLevel,
              weeklyGoal: validatedData.weeklyHours,
              preferredTags: validatedData.interests,
            },
            update: {
              learningPath: validatedData.experienceLevel,
              weeklyGoal: validatedData.weeklyHours,
              preferredTags: validatedData.interests,
            },
          },
        },
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 3,
              responses: {
                interests: validatedData,
              },
            },
            update: {
              currentStep: 3,
              responses: {
                interests: validatedData,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error saving interests:', error);
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid request data', { status: 400 });
    }
    return new NextResponse('Internal server error', { status: 500 });
  }
}