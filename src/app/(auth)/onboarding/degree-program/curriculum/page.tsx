// src/app/(auth)/onboarding/degree-program/curriculum/page.tsx
// This page handles the curriculum plan for students

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import CurriculumPlan from "@/components/onboarding/CurriculumPlan"

export default async function CurriculumPage() {
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

  // If survey not completed, go back to survey
  if (!user.onboardingProgress?.responses) {
    redirect('/onboarding/degree-program/survey')
  }

  // If curriculum accepted, move to recommendations
  if (user.onboardingProgress?.acceptedCurriculum) {
    redirect('/onboarding/degree-program/recommendations')
  }

  return <CurriculumPlan userPreferences={user.onboardingProgress.responses} />
}