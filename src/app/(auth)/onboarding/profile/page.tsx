// src/app/(auth)/onboarding/profile/page.tsx
// This page handles the survey for the degree program onboarding
// It fetches the user's survey data and returns it
// It also handles errors and returns appropriate responses

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { ComprehensiveSurveyForm } from "@/components/onboarding/survey/ComprehensiveSurveyForm"

export default async function DegreeProgramSurveyPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { 
      onboardingProgress: true 
    }
  })

  // Check if user is on correct path
  if (!user || user.careerPath !== 'DEGREE_PROGRAM') {
    redirect('/onboarding/career-path')
  }

  // Check if survey is already completed
  if (user.onboardingProgress?.currentStep === 'RECOMMENDATIONS') {
    redirect('/onboarding/degree-program/curriculum')
  }

  // Initialize survey data
  const initialData = {
    careerPath: user.careerPath,
    responses: user.onboardingProgress?.responses || {},
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ComprehensiveSurveyForm initialData={initialData} />
    </div>
  )
}