// src/app/api/user/accept-curriculum/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

const curriculumSchema = z.object({
  specialization: z.string()
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { specialization } = curriculumSchema.parse(body);

    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        onboardingProgress: {
          update: {
            currentStep: 'PROFILE',
            responses: {
              specialization,
              curriculumAccepted: true
            }
          }
        },
        preferences: {
          update: {
            specialization
          }
        }
      }
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error accepting curriculum:', error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid data', { status: 400 });
    }

    return new NextResponse('Internal server error', { status: 500 });
  }
}
