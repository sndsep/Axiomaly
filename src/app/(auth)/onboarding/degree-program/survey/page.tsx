// src/app/(auth)/onboarding/degree-program/survey/page.tsx

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DegreeProgramSurvey } from '@/components/onboarding/degree-program/Survey';

export default async function DegreeProgramSurveyPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  // Verify user has selected degree program path
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { 
      careerPath: true,
      onboardingProgress: true
    }
  });

  if (!user || user.careerPath !== 'DEGREE_PROGRAM') {
    redirect("/onboarding/career-path");
  }

  return <DegreeProgramSurvey />;
}