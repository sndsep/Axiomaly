// src/app/(auth)/onboarding/degree-program/curriculum/page.tsx
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import CurriculumPlan from '@/components/onboarding/degree-program/Curriculum';

// Define types for our curriculum data
interface UserPreferences {
  experienceLevel: string;
  specializations: string[];
  careerGoals: string[];
  timeCommitment: number;
  preferredLearningStyle: string[];
}

interface CurriculumPageProps {
  user: {
    id: string;
    name: string;
    email: string;
    preferences: UserPreferences;
  };
}

async function getUserPreferences(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        onboardingProgress: true,
        preferences: true,
      },
    });

    if (!user) {
      redirect('/login');
    }

    // Extract preferences from onboarding responses
    const responses = user.onboardingProgress?.responses as Record<string, any> || {};
    const preferences = user.preferences;

    return {
      experienceLevel: responses.experienceLevel || 'beginner',
      specializations: preferences?.preferredTags || [],
      careerGoals: responses.careerGoals || [],
      timeCommitment: preferences?.weeklyGoal || 10,
      preferredLearningStyle: responses.learningStyle || [],
    };
  } catch (error) {
    console.error('Error fetching user preferences:', error);
    throw error;
  }
}

export default async function CurriculumPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect('/login');
  }

  // Get user preferences for curriculum customization
  const userPreferences = await getUserPreferences(session.user.id);

  // Log for debugging
  console.log('User preferences:', userPreferences);

  return (
    <div className="min-h-screen bg-gray-50">
      <CurriculumPlan userPreferences={userPreferences} />
    </div>
  );
}