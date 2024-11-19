// src/components/onboarding/common/OnboardingLayout.tsx
"use client";

import React from 'react';
import { Card } from '@/components/ui/forms/card';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl p-6">
        {children}
      </Card>
    </div>
  );
}

export default OnboardingLayout;