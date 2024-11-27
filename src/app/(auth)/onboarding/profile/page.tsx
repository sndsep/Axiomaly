// src/app/(auth)/onboarding/profile/page.tsx
// This page handles the profile setup for the degree program onboarding
// It fetches the user's data and returns it
// It also handles errors and returns appropriate responses

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { ProfileSetupForm } from "@/components/onboarding/profile/ProfileSetupForm"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { onboardingProgress: true }
  })

  // Check if user is on correct path
  if (!user || user.onboardingProgress?.currentStep !== 'PROFILE') {
    redirect('/onboarding')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileSetupForm user={user} />
    </div>
  )
}