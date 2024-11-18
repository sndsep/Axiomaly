// src/app/api/user/career-path/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

const careerPathSchema = z.object({
  type: z.enum(['SHORT_COURSE', 'DEGREE_PROGRAM'])
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { type } = careerPathSchema.parse(body);

    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        careerPath: type,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'SURVEY',
              completed: false,
              responses: { careerPath: type }
            },
            update: {
              currentStep: 'SURVEY',
              responses: { careerPath: type }
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json({
      careerPath: user.careerPath,
      onboardingProgress: user.onboardingProgress
    });

  } catch (error) {
    console.error('Career path selection error:', error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid career path type', { status: 400 });
    }

    return new NextResponse('Internal server error', { status: 500 });
  }
}