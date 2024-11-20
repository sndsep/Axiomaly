// src/app/api/onboarding/accept-curriculum/route.ts
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

    const { accepted } = await request.json();

    if (!accepted) {
      return new NextResponse("Curriculum must be accepted", { status: 400 });
    }

    // Get current onboarding progress
    const currentProgress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id }
    });

    // Update onboarding progress
    await prisma.onboardingProgress.update({
      where: { userId: session.user.id },
      data: {
        responses: {
          ...(currentProgress?.responses as any || {}),
          curriculumAccepted: true,
          acceptedAt: new Date().toISOString()
        },
        acceptedCurriculum: true,
        currentStep: "EXPERIENCE" // Siguiendo tu enum original
      }
    });

    return NextResponse.json({ 
      success: true,
      nextStep: '/onboarding/profile' // Vamos al siguiente paso según el journey
    });
  } catch (error) {
    console.error('Error accepting curriculum:', error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to accept curriculum" }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}