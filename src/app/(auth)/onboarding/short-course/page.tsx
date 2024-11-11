// src/app/(auth)/onboarding/short-course-journey/page.tsx
// This page handles the short course journey for students who are interested in short courses

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import ShortCourseJourney from "@/components/onboarding/ShortCourseJourney";

export default async function ShortCourseJourneyPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect('/login');
  }

  // Fetch user data and verify career path
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      onboardingProgress: true,
    },
  });

  if (!user) {
    redirect('/login');
  }

  // If user hasn't selected a career path, redirect to selection
  if (!user.careerPath) {
    redirect('/onboarding/career-path');
  }

  // If user selected degree program, redirect to correct journey
  if (user.careerPath === 'DEGREE_PROGRAM') {
    redirect('/onboarding/degree-program-journey');
  }

  // If user has already completed this step, redirect to next step
  if (user.onboardingProgress?.completedSteps?.includes('interests')) {
    redirect('/onboarding/course-recommendations');
  }

  return (
    <OnboardingLayout currentStep="interests">
      <ShortCourseJourney />
    </OnboardingLayout>
  );
}