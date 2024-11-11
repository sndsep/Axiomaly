// src/app/(auth)/onboarding/page.tsx
// This page handles the onboarding process for students


import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.email) {
    redirect('/login')
  }

  // Get user's onboarding status
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      careerPath: true,
      hasCompletedOnboarding: true,
      onboardingProgress: true
    }
  })

  if (user?.hasCompletedOnboarding) {
    redirect('/dashboard')
  }

  // If no career path selected, start there
  if (!user?.careerPath) {
    redirect('/onboarding/career-path')
  }

  // Determine next step based on career path
  if (user.careerPath === 'SHORT_COURSE') {
    if (!user.onboardingProgress?.responses) {
      redirect('/onboarding/short-course/survey')
    }
    if (!user.onboardingProgress?.viewedRecommendations) {
      redirect('/onboarding/short-course/recommendations')
    }
    redirect('/onboarding/short-course/profile')
  } else {
    if (!user.onboardingProgress?.responses) {
      redirect('/onboarding/degree-program/survey')
    }
    if (!user.onboardingProgress?.acceptedCurriculum) {
      redirect('/onboarding/degree-program/curriculum')
    }
    redirect('/onboarding/degree-program/profile')
  }
}