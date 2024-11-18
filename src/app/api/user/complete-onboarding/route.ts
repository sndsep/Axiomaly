// src/app/api/user/complete-onboarding/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        hasCompletedOnboarding: true,
        onboardingProgress: {
          update: {
            completed: true,
            currentStep: 'COMPLETED'
          }
        }
      }
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Complete onboarding error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}