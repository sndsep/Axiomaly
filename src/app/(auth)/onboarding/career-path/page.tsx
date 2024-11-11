// src/app/(auth)/onboarding/career-path/page.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CareerPathSelection } from "@/components/auth/career-path-selection";
import { OnboardingLayout } from "@/components/onboarding/common/OnboardingLayout";

export default async function CareerPathPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    redirect('/login');
  }

  // Check if user has already completed onboarding
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { 
      hasCompletedOnboarding: true,
      careerPath: true 
    }
  });

  // If user has completed onboarding, redirect to dashboard
  if (user?.hasCompletedOnboarding) {
    redirect('/dashboard');
  }

  return (
    <OnboardingLayout>
      <CareerPathSelection />
    </OnboardingLayout>
  );
}