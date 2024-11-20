// src/app/api/onboarding/complete/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { OnboardingStep } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        hasCompletedOnboarding: true,
            // Start of Selection
            onboardingProgress: {
              update: {
                currentStep: OnboardingStep.TOUR,
                completed: true,
                updatedAt: new Date(),
                responses: {
                  onboardingCompletedAt: new Date().toISOString()
                }
              }
            }
                // Start of Selection
                },
              }
            }
          },
          include: {
            onboardingProgress: true,
            preferences: true,
          }
      }
    });

    return NextResponse.json({ 
      success: true, 
      user: updatedUser,
      redirectTo: '/dashboard'
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
