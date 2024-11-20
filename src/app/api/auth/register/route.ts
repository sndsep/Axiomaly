// src/app/api/auth/register/route.ts

import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = registerSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
          error: "User with this email already exists"
        }),
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "STUDENT",
        hasCompletedOnboarding: false,
        careerPath: null,
        onboardingProgress: {
          create: {
            currentStep: "CAREER_PATH",
            completed: false,
            responses: {}
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          hasCompletedOnboarding: user.hasCompletedOnboarding,
          careerPath: user.careerPath,
          currentStep: user.onboardingProgress?.currentStep
        },
        redirectTo: '/onboarding/career-path'
      },
      { status: 201 }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}