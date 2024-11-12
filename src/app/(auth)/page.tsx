// src/app/(auth)/onboarding/short-course/recommendations/page.tsx
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import CourseRecommendations from "@/components/onboarding/short-course/Recommendations"

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
  if (user.careerPath !== 'SHORT_COURSE') redirect('/onboarding/career-path')

  // If survey not completed, go back to survey
  if (!user.onboardingProgress?.responses) {
    redirect('/onboarding/short-course/survey')
  }

  // If recommendations already viewed and course selected, move to profile
  if (user.onboardingProgress?.viewedRecommendations && user.onboardingProgress?.selectedCourse) {
    redirect('/onboarding/short-course/profile')
  }

  return <CourseRecommendations 
    userPreferences={user.onboardingProgress.responses} 
  />
}