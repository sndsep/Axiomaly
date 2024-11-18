//src/components/onboarding/layout/OnboardingLayout.tsx
'use client';

import React from 'react';
import { useOnboarding } from '@/contexts/onboarding-context';
import { OnboardingProgress } from './OnboardingProgress';
import { Button } from '@/components/ui/forms/button';
import { OnboardingProvider } from '@/contexts/onboarding-context';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/forms/card';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  canContinue?: boolean;
}

export function OnboardingLayout({
  children,
  showNavigation = true,
  canContinue = true,
}: OnboardingLayoutProps) {
  const { state, nextStep, previousStep } = useOnboarding();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <OnboardingProgress />
        
        <Card className="p-6">
          {children}
        </Card>

        {showNavigation && (
          <div className="flex justify-between mt-6">
            {state.currentStep > 1 && (
              <Button
                variant="outline"
                onClick={previousStep}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            )}
            {state.currentStep < 5 && (
              <Button
                onClick={nextStep}
                disabled={!canContinue}
                className="flex items-center gap-2 ml-auto"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}