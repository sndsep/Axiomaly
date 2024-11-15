// src/app/api/user/career-path/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { CareerPath, OnboardingStep } from '@prisma/client';
import { CareerPathSelection } from '@/types/onboarding';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const data: CareerPathSelection = await request.json();

    console.log('Updating user with data:', data);

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        careerPath: data.type as CareerPath,
        onboardingProgress: {
          upsert: {
            where: { userId: session.user.id },
            create: {
              currentStep: 'INTERESTS' as OnboardingStep,
              completed: false,
              responses: {}
            },
            update: {
              currentStep: 'INTERESTS' as OnboardingStep,
              responses: {}
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    console.log('User updated:', updatedUser);
    return NextResponse.json(updatedUser);
    
  } catch (error) {
    console.error('Career path selection error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to save career path' }, 
      { status: 500 }
    );
  }
}