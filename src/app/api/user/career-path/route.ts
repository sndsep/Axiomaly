// src/app/api/user/career-path/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { type } = await req.json();

    if (!type || !['SHORT_COURSE', 'DEGREE_PROGRAM'].includes(type)) {
      return new NextResponse('Invalid career path type', { status: 400 });
    }

    // Update user's career path
    await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        careerPath: type,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'INTERESTS',
              completed: false,
            },
            update: {
              currentStep: 'INTERESTS',
            }
          }
        }
      },
    });

    return NextResponse.json({ 
      success: true,
      message: `Successfully set career path to ${type}` 
    });
  } catch (error) {
    console.error('Career path selection error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}