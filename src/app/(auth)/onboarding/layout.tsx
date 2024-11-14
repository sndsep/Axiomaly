import React from 'react'

interface OnboardingLayoutProps {
  children: React.ReactNode
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}