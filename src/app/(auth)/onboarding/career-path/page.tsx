// src/app/(auth)/onboarding/career-path/page.tsx

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import { CareerPathSelection } from "@/components/onboarding/career-path/CareerPathSelection"

export default async function CareerPathPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  // Check if user already has a career path
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { onboardingProgress: true }
  })

  // If user has already selected a career path, redirect to appropriate survey
  if (user?.careerPath) {
    const surveyPath = user.careerPath === 'SHORT_COURSE'
      ? '/onboarding/short-course/survey'
      : '/onboarding/degree-program/survey'
    redirect(surveyPath)
  }

  return <CareerPathSelection />
}