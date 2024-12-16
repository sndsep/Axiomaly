// src/components/onboarding/layout/OnboardingLayout.tsx
'use client'

import React from 'react'
import { Card } from '@/components/ui/forms/card'
import { usePathname } from 'next/navigation'

interface OnboardingLayoutProps {
  children: React.ReactNode
}

const steps = [
  { path: '/onboarding/career-path', label: 'Career Path' },
  { path: '/onboarding/short-course/survey', label: 'Survey' },
  { path: '/onboarding/degree-program/survey', label: 'Survey' },
  { path: '/onboarding/short-course/recommendations', label: 'Recommendations' },
  { path: '/onboarding/degree-program/curriculum', label: 'Curriculum' },
  { path: '/onboarding/profile', label: 'Profile' },
  { path: '/onboarding/tour', label: 'Platform Tour' }
]

export function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container flex items-center justify-center min-h-screen py-8">
        <div className="w-full max-w-2xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to the Platform</h1>
            <p className="text-muted-foreground">
              Complete your profile to get started
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}