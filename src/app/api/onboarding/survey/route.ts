// src/app/api/onboarding/survey/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await request.json();
    const validatedData = surveySchema.parse(data);

    // Save survey responses
    await prisma.onboardingProgress.upsert({
      where: {
        userId: session.user.id,
      },
      create: {
        userId: session.user.id,
        currentStep: 2,
        responses: validatedData,
      },
      update: {
        currentStep: 2,
        responses: validatedData,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing survey:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const surveyResponse = await prisma.surveyResponse.findUnique({
      where: { userId: session.user.id },
    });

    return NextResponse.json(surveyResponse);
  } catch (error) {
    console.error('Error fetching survey:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}