// src/app/api/onboarding/accept-curriculum/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

const curriculumSchema = z.object({
  specialization: z.string(),
  acceptedAt: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { specialization } = curriculumSchema.parse(body);

    const currentProgress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id }
    });

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        onboardingProgress: {
          update: {
            currentStep: 'PROFILE',
            responses: {
              ...((currentProgress?.responses as any) || {}),
              specialization,
              curriculumAccepted: true,
              acceptedAt: new Date().toISOString()
            },
            acceptedCurriculum: true
          }
        },
        preferences: {
          upsert: {
            create: {
              specialization,
              updatedAt: new Date()
            },
            update: {
              specialization,
              updatedAt: new Date()
            }
          }
        }
      },
      include: {
        onboardingProgress: true,
        preferences: true
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

// src/app/api/onboarding/background/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const backgroundSchema = z.object({
  education: z.string().optional(),
  workExperience: z.string().optional(),
  skills: z.array(z.string()).optional(),
  portfolio: z.string().url().optional()
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const data = backgroundSchema.parse(body);

    const currentProgress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id }
    });

    await prisma.onboardingProgress.update({
      where: { userId: session.user.id },
      data: {
        responses: {
          ...((currentProgress?.responses as any) || {}),
          background: data
        },
        currentStep: "MENTORSHIP"
      }
    });

    return NextResponse.json({ 
      success: true,
      nextStep: "/onboarding/mentorship"
    });
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// src/app/api/onboarding/career-path/route.ts
const careerPathSchema = z.object({
  type: z.enum(['SHORT_COURSE', 'DEGREE_PROGRAM'])
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { type } = careerPathSchema.parse(body);

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { 
        careerPath: type,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'INTERESTS',
              completed: false,
              responses: {
                careerPath: type,
                selectedAt: new Date().toISOString()
              }
            },
            update: {
              currentStep: 'INTERESTS',
              responses: {
                careerPath: type,
                selectedAt: new Date().toISOString()
              }
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      user: updatedUser,
      nextStep: '/onboarding/interests'
    });
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}