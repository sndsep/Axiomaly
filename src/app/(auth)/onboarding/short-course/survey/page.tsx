// src/app/(auth)/onboarding/short-course/survey/page.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Survey } from "@/components/onboarding/short-course/Survey";
import { CareerPath, OnboardingStep } from "@/types/onboarding";

export default async function ShortCourseSurveyPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  // Verify user has selected short course path and is at correct step
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      onboardingProgress: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  if (!user.careerPath) {
    redirect("/onboarding/career-path");
  }

  if (user.careerPath !== CareerPath.SHORT_COURSE) {
    redirect("/onboarding/career-path");
  }

  if (user.hasCompletedOnboarding) {
    redirect("/dashboard");
  }

  if (!user.onboardingProgress || 
      user.onboardingProgress.currentStep !== OnboardingStep.CAREER_PATH) {
    redirect("/onboarding/career-path");
  }

  return <Survey />;
}