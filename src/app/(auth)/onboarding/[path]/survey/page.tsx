// src/app/(auth)/onboarding/[path]/survey/page.tsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export default async function SurveyPage({
  params
}: {
  params: { path: string }
}) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    redirect('/login');
  }

  // Verify user has selected a career path
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { onboardingProgress: true }
  });

  if (!user?.careerPath) {
    redirect('/onboarding/career-path');
  }

  // Render survey form based on career path
  return (
    <div>
      <h1>Survey for {params.path}</h1>
      {/* Add your survey form component here */}
    </div>
  );
}