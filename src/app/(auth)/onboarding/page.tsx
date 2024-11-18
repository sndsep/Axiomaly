// src/app/(auth)/onboarding/page.tsx

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { OnboardingLayout } from "@/components/onboarding/layout/OnboardingLayout"

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
  const stepRoutes = {
    'CAREER_PATH': '/onboarding/career-path',
    'SURVEY': `/onboarding/${user?.careerPath === 'SHORT_COURSE' ? 'short-course' : 'degree-program'}/survey`,
    'RECOMMENDATIONS': `/onboarding/short-course/recommendations`,
    'CURRICULUM': `/onboarding/degree-program/curriculum`,
    'PROFILE': '/onboarding/profile',
    'TOUR': '/onboarding/tour'
  }

  redirect(stepRoutes[currentStep] || '/onboarding/career-path')
}