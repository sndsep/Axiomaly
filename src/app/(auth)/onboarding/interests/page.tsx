// src/app/(auth)/onboarding/interests/page.tsx
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { InterestForm } from "@/components/onboarding/interests/InterestForm" // Ensure this path is correct

export default async function InterestsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.email) {
    redirect('/login')
  }

  // Check if user exists and has a career path set
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { careerPath: true, hasCompletedOnboarding: true }
  })

  if (!user?.careerPath) {
    redirect('/onboarding/career-path')
  }

  if (user?.hasCompletedOnboarding) {
    redirect('/dashboard')
  }

  return <InterestForm />
}