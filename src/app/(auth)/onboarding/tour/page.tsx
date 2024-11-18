// src/app/(auth)/onboarding/tour/page.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PlatformTour } from "@/components/onboarding/tour/PlatformTour";

async function getUserCareerPath(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      careerPath: true,
      hasCompletedOnboarding: true
    }
  });
  return user;
}

export default async function TourPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  const user = await getUserCareerPath(session.user.id);

  if (!user?.careerPath) {
    redirect('/onboarding/career-path');
  }

  if (user.hasCompletedOnboarding) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PlatformTour 
        programType={user.careerPath as 'SHORT_COURSE' | 'DEGREE_PROGRAM'}
        onComplete={async () => {
          'use server';
          await prisma.user.update({
            where: { id: session.user.id },
            data: { hasCompletedOnboarding: true }
          });
        }}
      />
    </div>
  );
}