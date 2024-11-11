// src/app/(auth)/onboarding/short-course/profile/page.tsx
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import ProfileCompletion from "@/components/onboarding/ProfileCompletion"

export default async function ProfilePage() {
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

  // Check previous steps are completed
  if (!user.onboardingProgress?.responses) {
    redirect('/onboarding/short-course/survey')
  }
  
  if (!user.onboardingProgress?.viewedRecommendations || !user.onboardingProgress?.selectedCourse) {
    redirect('/onboarding/short-course/recommendations')
  }

  return (
    <ProfileCompletion 
      type="short-course"
      selectedCourse={user.onboardingProgress.selectedCourse}
      onComplete={() => {
        // This is handled by the component itself via API call
      }}
    />
  )
}