// src/app/(auth)/onboarding/degree-program/curriculum/page.tsx
// This component displays the user's personalized curriculum

import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import CurriculumPlan from '@/components/onboarding/degree-program/Curriculum';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import Loading from './loading';

interface UserPreferences {
  experienceLevel: string;
  specializations: string[];
  careerGoals: string[];
  timeCommitment: number;
  preferredLearningStyle: string[];
}

async function getUserPreferences(userId: string): Promise<UserPreferences> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        onboardingProgress: true,
        preferences: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

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

async function CurriculumContent() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect('/login');
  }

  const userPreferences = await getUserPreferences(session.user.id);

  return <CurriculumPlan userPreferences={userPreferences} />;
}

export default function CurriculumPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <CurriculumContent />
      </Suspense>
    </ErrorBoundary>
  );
}