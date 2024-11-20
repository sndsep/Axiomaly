// src/app/api/onboarding/background/route.ts
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await request.json();

    // Update onboarding progress
    await prisma.onboardingProgress.update({
      where: { userId: session.user.id },
      data: {
        responses: {
          ...(await prisma.onboardingProgress
            .findUnique({ where: { userId: session.user.id } })
            .then(progress => progress?.responses || {})),
          background: data
        },
        currentStep: "MENTORSHIP" // Next step in your enum
      }
    });

    return NextResponse.json({ 
      success: true,
      nextStep: "/onboarding/mentorship"
    });

  } catch (error) {
    console.error('Error saving background:', error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to save background information" }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}