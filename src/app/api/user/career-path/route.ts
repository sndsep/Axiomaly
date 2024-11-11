// src/app/api/user/career-path/route.ts


import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// Validation schema for career path
const careerPathSchema = z.object({
  type: z.enum(['SHORT_COURSE', 'DEGREE_PROGRAM']),
});

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    
    const validatedData = careerPathSchema.parse(body);

    // Update user career path
    const updatedUser = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        careerPath: validatedData.type,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'INTERESTS',
              completed: false,
              responses: {}
            },
            update: {
              currentStep: 'INTERESTS',
              responses: {}
            }
          }
        }
      },
    });

    return NextResponse.json({
      message: 'Career path updated successfully',
      careerPath: updatedUser.careerPath
    });

  } catch (error) {
    console.error('Error setting career path:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid request data',
          details: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        careerPath: true,
        onboardingProgress: true,
      },
    });

    return NextResponse.json(user);

  } catch (error) {
    console.error('Error getting career path:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}