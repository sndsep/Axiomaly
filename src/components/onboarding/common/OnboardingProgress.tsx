// src/components/onboarding/common/OnboardingProgress.tsx


'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { OnboardingStep } from '@/lib/constants/onboarding';
import { cn } from '@/lib/utils';

interface OnboardingProgressProps {
  steps: readonly OnboardingStep[];
  currentStep: string;
  completedSteps: string[];
}

export function OnboardingProgress({ steps, currentStep, completedSteps }: OnboardingProgressProps) {
  return (
    <nav aria-label="Progress" className="w-full">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step, stepIdx) => {
          const isCurrentStep = currentStep === step.id;
          const isCompleted = completedSteps.includes(step.id);

          return (
            <li key={step.id} className="md:flex-1">
              <div 
                className={cn(
                  "group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",
                  isCurrentStep
                    ? "border-blue-600"
                    : isCompleted
                    ? "border-green-600"
                    : "border-gray-200"
                )}
              >
                <span className="text-sm font-medium">
                  {isCompleted ? (
                    <span className="flex items-center text-green-600">
                      <Check className="mr-2 h-4 w-4" />
                      {step.title}
                    </span>
                  ) : (
                    <span
                      className={cn(
                        isCurrentStep
                          ? "text-blue-600"
                          : "text-gray-500"
                      )}
                    >
                      {step.title}
                    </span>
                  )}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    isCurrentStep
                      ? "text-blue-600"
                      : "text-gray-500"
                  )}
                >
                  {step.description}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}