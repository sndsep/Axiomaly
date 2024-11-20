// src/app/api/onboarding/career-path/route.ts
    // Start of Selection
    import { prisma } from "@/lib/db";
    import { getServerSession } from "next-auth/next";
    import { authOptions } from "@/lib/auth";
    import { NextResponse } from "next/server";
    
    export async function POST(req: Request) {
      try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const { type } = data;

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if OnboardingProgress exists
    const onboardingProgress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id },
    });

    if (!onboardingProgress) {
      // Create OnboardingProgress if it doesn't exist
      await prisma.onboardingProgress.create({
        data: {
          userId: session.user.id,
          currentStep: "CAREER_PATH", // Set initial step
          completed: false,
          responses: {},
        },
      });
    }

    // Now update the user and onboarding progress
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        careerPath: type,
        onboardingProgress: {
          update: {
            currentStep: "SURVEY",
            responses: {
              careerPath: type,
              selectedAt: new Date().toISOString(),
            },
          },
        },
      },
      include: {
        onboardingProgress: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}