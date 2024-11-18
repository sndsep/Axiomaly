// src/app/(auth)/onboarding/degree-program/survey/page.tsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { OnboardingLayout } from '@/components/onboarding/layout/OnboardingLayout';
import { ComprehensiveSurveyForm } from '@/components/onboarding/survey/ComprehensiveSurveyForm';

export default async function DegreeProgramSurveyPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  // Verify user is on degree program path
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { 
      onboardingProgress: true,
      surveyResponse: true
    }
  });

  // If no user or wrong path, redirect to career path selection
  if (!user || user.careerPath !== 'DEGREE_PROGRAM') {
    redirect('/onboarding/career-path');
  }

  // If survey is already completed, redirect to curriculum page
  if (user.surveyResponse && user.onboardingProgress?.currentStep === 'RECOMMENDATIONS') {
    redirect('/onboarding/degree-program/curriculum');
  }

  return (
    <OnboardingLayout>
      <ComprehensiveSurveyForm />
    </OnboardingLayout>
  );
}