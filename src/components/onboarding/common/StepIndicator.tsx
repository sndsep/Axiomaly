// src/components/onboarding/common/StepIndicator.tsx

// This component renders the step indicator for the onboarding process
// It displays the current step and the steps in the onboarding process

import { FC } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator: FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress" className="w-full">
      <ol role="list" className="flex items-center justify-center">
        {steps.map((step, index) => {
          const isCurrentStep = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          const isLastStep = index === steps.length - 1;

          return (
            <li 
              key={step.id} 
              className={cn(
                "relative",
                !isLastStep && "pr-8 sm:pr-20"
              )}
            >
              {/* Line connecting steps */}
              {!isLastStep && (
                <div 
                  className={cn(
                    "absolute top-4 left-0 -translate-y-1/2 w-full h-0.5",
                    isCompleted ? "bg-blue-600" : "bg-gray-200"
                  )}
                  style={{ width: 'calc(100% - 2rem)' }}
                />
              )}

              <div className="group relative flex flex-col items-center">
                <div 
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center relative z-10",
                    isCompleted && "bg-blue-600",
                    isCurrentStep && "bg-blue-600",
                    !isCompleted && !isCurrentStep && "bg-gray-200"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span 
                      className={cn(
                        "text-sm font-semibold",
                        isCurrentStep ? "text-white" : "text-gray-600"
                      )}
                    >
                      {step.id}
                    </span>
                  )}
                </div>
                
                <span
                  className={cn(
                    "mt-2 text-xs font-medium",
                    isCurrentStep ? "text-blue-600" : "text-gray-500"
                  )}
                >
                  {step.label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};