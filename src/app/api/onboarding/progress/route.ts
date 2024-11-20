// src/app/api/user/onboarding/progress/route.ts

import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { OnboardingStep } from "@prisma/client";

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { currentStep, completed } = body;

    // Validate the onboarding step
    if (!Object.values(OnboardingStep).includes(currentStep)) {
      return new NextResponse("Invalid onboarding step", { status: 400 });
    }

    // Update onboarding progress
    const updatedProgress = await prisma.onboardingProgress.update({
      where: { userId: session.user.id },
      data: {
        currentStep,
        completed: completed || false,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedProgress);
  } catch (error) {
    console.error('Error updating onboarding progress:', error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to update onboarding progress" }), 
      { status: 500 }
    );
  }
}