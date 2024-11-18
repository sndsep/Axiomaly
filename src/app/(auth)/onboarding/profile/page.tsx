// src/app/(auth)/onboarding/profile/page.tsx

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { OnboardingLayout } from "@/components/onboarding/layout/OnboardingLayout"
import { ProfileSetupForm } from "@/components/onboarding/profile/ProfileSetupForm"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (user?.onboardingProgress?.responses?.profileCompleted) {
    redirect('/onboarding/tour')
  }

  return (
    <OnboardingLayout>
      <ProfileSetupForm user={session.user} />
    </OnboardingLayout>
  )
}