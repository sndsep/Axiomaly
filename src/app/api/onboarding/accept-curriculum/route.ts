// src/app/api/onboarding/accept-curriculum/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { OnboardingStep } from '@prisma/client';

const curriculumSchema = z.object({
  specialization: z.string(),
  acceptedAt: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    console.log('Incoming request body:', body);
    
    if (!body.specialization) {
      return NextResponse.json({ error: 'Specialization is required' }, { status: 400 });
    }

    const { specialization } = curriculumSchema.parse(body);

    const currentProgress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id }
    });

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        onboardingProgress: {
          update: {
            currentStep: 'PROFILE' as OnboardingStep,
            selectedSpecializations: [specialization],
            responses: {
              ...((currentProgress?.responses as any) || {}),
              curriculumAccepted: true,
              acceptedAt: new Date().toISOString()
            },
            acceptedCurriculum: true
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json({ 
      success: true,
      nextStep: '/onboarding/profile',
      progress: updatedUser.onboardingProgress
    });
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}