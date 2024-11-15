// src/app/api/user/career-path/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { CareerPath } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { careerPath } = await req.json();

    if (!Object.values(CareerPath).includes(careerPath)) {
      return NextResponse.json(
        { message: 'Invalid career path' }, 
        { status: 400 }
      );
    }

    const user = await prisma.$transaction(async (tx) => {
      const updatedUser = await tx.user.update({
        where: { id: session.user.id },
        data: { careerPath }
      });

      await tx.onboardingProgress.upsert({
        where: { userId: session.user.id },
        create: {
          userId: session.user.id,
          currentStep: 'CAREER_PATH'
        },
        update: {
          currentStep: 'CAREER_PATH'
        }
      });

      return updatedUser;
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Career path update error:', error);
    return NextResponse.json(
      { message: 'Failed to update career path' }, 
      { status: 500 }
    );
  }
}