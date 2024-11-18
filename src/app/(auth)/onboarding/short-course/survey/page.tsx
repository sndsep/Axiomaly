// src/app/(auth)/onboarding/short-course/survey/page.tsx

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { OnboardingLayout } from "@/components/onboarding/layout/OnboardingLayout"
import { ShortCourseSurveyForm } from "@/components/onboarding/survey/ShortCourseSurveyForm"

export default async function ShortCourseSurveyPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { onboardingProgress: true }
  })

  if (user?.careerPath !== 'SHORT_COURSE') {
    redirect('/onboarding')
  }

  if (user?.onboardingProgress?.responses?.surveyCompleted) {
    redirect('/onboarding/short-course/recommendations')
  }

  return (
    <OnboardingLayout>
      <ShortCourseSurveyForm />
    </OnboardingLayout>
  )
}