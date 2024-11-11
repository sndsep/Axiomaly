// src/app/(auth)/onboarding/degree-program/recommendations/page.tsx
// This page handles the specialization recommendations for students  

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import SpecializationRecommendations from "@/components/onboarding/SpecializationRecommendations"

export default async function RecommendationsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.email) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { 
      careerPath: true,
      hasCompletedOnboarding: true,
      onboardingProgress: true
    }
  })

  // Various validation checks
  if (!user) redirect('/onboarding/career-path')
  if (user.hasCompletedOnboarding) redirect('/dashboard')
  if (user.careerPath !== 'DEGREE_PROGRAM') redirect('/onboarding/career-path')

  // Check previous steps
  if (!user.onboardingProgress?.responses) {
    redirect('/onboarding/degree-program/survey')
  }

  if (!user.onboardingProgress?.acceptedCurriculum) {
    redirect('/onboarding/degree-program/curriculum')
  }

  // If recommendations already selected, move to profile
  if (user.onboardingProgress?.selectedSpecializations) {
    redirect('/onboarding/degree-program/profile')
  }

  return (
    <SpecializationRecommendations 
      userPreferences={user.onboardingProgress.responses}
      acceptedCurriculum={user.onboardingProgress.acceptedCurriculum}
    />
  )
}