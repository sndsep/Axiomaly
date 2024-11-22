// src/app/api/onboarding/complete/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ message: 'Unauthorized' }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { 
        email: session.user.email 
      },
      data: {
        hasCompletedOnboarding: true,
        onboardingProgress: {
          update: {
            completed: true,
            responses: {
              onboardingCompletedAt: new Date().toISOString()
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return new NextResponse(
      JSON.stringify({ 
        success: true, 
        message: 'Onboarding completed successfully',
        user: updatedUser 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error completing onboarding:', error);
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to complete onboarding' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}