// src/components/auth/onboarding-form.tsx
// This component is used to handle the onboarding form.  

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Progress } from "@/components/ui/forms/progress"
import { Button } from "@/components/ui/forms/button"
import { Card, CardContent } from "@/components/ui/forms/card"
import { Icons } from "@/components/ui/icons/icons"
import { useToast } from '@/components/ui/hooks/use-toast'

type OnboardingStep = {
  id: number
  title: string
  component: React.ReactNode
}

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: "Basic Information",
      component: <BasicInfoStep />,
    },
    {
      id: 2,
      title: "Experience Level",
      component: <ExperienceStep />,
    },
    {
      id: 3,
      title: "Learning Goals",
      component: <GoalsStep />,
    },
  ]

  const totalSteps = steps.length
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleComplete()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleComplete = async () => {
    setIsLoading(true)
    try {
      // Save onboarding data
      const response = await fetch('/api/user/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Add onboarding data here
        }),
      })

      if (!response.ok) throw new Error('Failed to save onboarding data')

      toast({
        title: "Profile setup complete!",
        description: "Welcome to VFX Academy",
      })

      router.push('/dashboard')
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Progress value={progress} className="w-full" />
      
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              {steps[currentStep - 1].title}
            </h2>
          </div>
          
          {steps[currentStep - 1].component}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1 || isLoading}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {currentStep === totalSteps ? 'Complete' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Step Components
function BasicInfoStep() {
  return (
    <div className="space-y-4">
      {/* Add your form fields here */}
      <p>Basic information form fields will go here</p>
    </div>
  )
}

function ExperienceStep() {
  return (
    <div className="space-y-4">
      {/* Add your form fields here */}
      <p>Experience level selection will go here</p>
    </div>
  )
}

function GoalsStep() {
  return (
    <div className="space-y-4">
      {/* Add your form fields here */}
      <p>Learning goals selection will go here</p>
    </div>
  )
}