// src/components/onboarding/layout/OnboardingProgress.tsx
'use client';

import React from 'react';
import { useOnboarding } from '@/contexts/onboarding-context';
import { CheckCircle2, Circle } from 'lucide-react';

export function OnboardingProgress() {
  const { state } = useOnboarding();

  const steps = [
    { label: 'Career Path', description: 'Choose your learning journey' },
    { label: 'Survey', description: 'Tell us about yourself' },
    { label: 'Recommendations', description: 'Explore personalized courses' },
    { label: 'Profile', description: 'Complete your profile' },
    { label: 'Tour', description: 'Get to know the platform' },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`flex flex-col items-center ${
              index < state.currentStep ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div className="relative mb-2">
              {index < state.currentStep ? (
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              ) : (
                <Circle className={`w-8 h-8 ${
                  index === state.currentStep ? 'text-blue-600' : 'text-gray-300'
                }`} />
              )}
            </div>
            <span className="text-sm font-medium">{step.label}</span>
            <span className="text-xs text-gray-500 text-center">{step.description}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-4">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200" />
        <div
          className="absolute left-0 top-1/2 h-0.5 bg-blue-600 transition-all duration-500"
          style={{
            width: `${((state.currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}