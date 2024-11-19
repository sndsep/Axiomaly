// src/app/api/user/career-path/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

const careerPathSchema = z.object({
  type: z.enum(['SHORT_COURSE', 'DEGREE_PROGRAM'])
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = careerPathSchema.parse(body);

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        careerPath: validatedData.type,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'INTERESTS',
              completed: false
            },
            update: {
              currentStep: 'INTERESTS'
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (error) {
    console.error('Career path selection error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to save career path' },
      { status: 500 }
    );
  }
}