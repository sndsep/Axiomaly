// src/app/(auth)/onboarding/layout.tsx
"use client"

import { Card } from '@/components/ui/forms/card';
import { usePathname } from 'next/navigation';

const DEGREE_PROGRAM_STEPS = [
  {
    title: 'Career Path',
    description: 'Choose your learning journey',
    path: '/onboarding/career-path'
  },
  {
    title: 'Survey',
    description: 'Tell us about yourself',
    path: '/onboarding/degree-program/survey'
  },
  {
    title: 'Curriculum',
    description: 'Review your program',
    path: '/onboarding/degree-program/curriculum'
  },
  {
    title: 'Profile',
    description: 'Complete your profile',
    path: '/onboarding/profile'
  },
  {
    title: 'Tour',
    description: 'Get to know the platform',
    path: '/onboarding/tour'
  }
];

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  
  // Calculate current step
  const currentStepIndex = DEGREE_PROGRAM_STEPS.findIndex(step => 
    pathname.startsWith(step.path)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Steps - single line */}
        <div className="mb-8">
          <div className="flex justify-between mb-8">
            {DEGREE_PROGRAM_STEPS.map((step, index) => (
              <div 
                key={step.path}
                className="flex flex-col items-center relative w-full"
              >
                {/* Step circle */}
                <div className={`
                  relative z-10 w-8 h-8 rounded-full flex items-center justify-center
                  ${index <= currentStepIndex ? 'bg-primary text-white' : 'bg-gray-200'}
                  ${index === currentStepIndex ? 'ring-2 ring-primary ring-offset-2' : ''}
                `}>
                  {index + 1}
                </div>

                {/* Progress line */}
                {index < DEGREE_PROGRAM_STEPS.length - 1 && (
                  <div 
                    className={`absolute left-1/2 w-full h-[2px] top-4
                      ${index < currentStepIndex ? 'bg-primary' : 'bg-gray-200'}`}
                  />
                )}

                {/* Step text */}
                <div className="text-center mt-2">
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <Card className="max-w-4xl mx-auto">
          {children}
        </Card>
      </div>
    </div>
  );
}