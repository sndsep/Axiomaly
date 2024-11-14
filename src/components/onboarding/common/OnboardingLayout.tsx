// src/components/onboarding/common/OnboardingLayout.tsx
import React from 'react'

interface OnboardingLayoutProps {
  children: React.ReactNode
}

export function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}