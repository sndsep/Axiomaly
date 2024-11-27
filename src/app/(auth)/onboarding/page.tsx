// src/app/(auth)/onboarding/page.tsx

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { onboardingProgress: true }
  })

  if (user?.hasCompletedOnboarding) {
    redirect('/dashboard')
  }

  // Redirect to the appropriate step based on onboarding progress
  const currentStep = user?.onboardingProgress?.currentStep || 'CAREER_PATH'
  
  // Define step routes based on career path
  const stepRoutes = {
    CAREER_PATH: '/onboarding/career-path',
    SURVEY: user?.careerPath === 'SHORT_COURSE' 
      ? '/onboarding/short-course/survey'
      : '/onboarding/degree-program/survey',
    RECOMMENDATIONS: user?.careerPath === 'SHORT_COURSE'
      ? '/onboarding/short-course/recommendations'
      : '/onboarding/degree-program/curriculum',
    PROFILE: '/onboarding/profile',
    TOUR: '/onboarding/tour',
    COMPLETED: '/dashboard'
  }

  // Log current state for debugging
  console.log('Current user state:', {
    currentStep,
    careerPath: user?.careerPath,
    targetRoute: stepRoutes[currentStep]
  })

  // Redirect to the appropriate route or fallback to career path
  const targetRoute = stepRoutes[currentStep] || '/onboarding/career-path'
  redirect(targetRoute)
}