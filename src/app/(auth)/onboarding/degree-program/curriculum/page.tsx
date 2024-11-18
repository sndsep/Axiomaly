// src/app/(auth)/onboarding/degree-program/curriculum/page.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CurriculumPlan } from "@/components/onboarding/recommendations/CurriculumPlan";

async function getCurriculumPlan(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      onboardingProgress: {
        select: {
          responses: true
        }
      }
    }
  });

  if (!user?.onboardingProgress?.responses) {
    redirect('/onboarding/degree-program/survey');
  }

  // Fetch curriculum based on user's survey responses and specialization
  const responses = user.onboardingProgress.responses as Record<string, any>;
  
  const curriculum = await prisma.curriculum.findFirst({
    where: {
      specializationId: responses.specializationTrack,
      difficultyLevel: responses.experienceLevel
    },
    include: {
      semesters: {
        include: {
          modules: {
            include: {
              courses: true
            }
          }
        }
      }
    }
  });

  return {
    specialization: responses.specializationTrack,
    totalCredits: curriculum?.totalCredits || 120,
    estimatedDuration: curriculum?.duration || "24 months",
    semesters: curriculum?.semesters || []
  };
}

export default async function CurriculumPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  const curriculumData = await getCurriculumPlan(session.user.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <CurriculumPlan {...curriculumData} />
      </div>
    </div>
  );
}