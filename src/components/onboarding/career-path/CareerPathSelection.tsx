'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/forms/button'
import { Card, CardContent } from '@/components/ui/forms/card'

type CareerPathType = 'SHORT_COURSE' | 'DEGREE_PROGRAM'

const pathFeatures = {
  shortCourse: {
    icon: <Loader2 className="w-8 h-8 text-blue-600" />,
    title: "Short Course",
    description: "Master specific skills fast",
    color: "blue",
    type: 'SHORT_COURSE' as const,
    features: [
      {
        icon: <Loader2 className="w-6 h-6" />,
        title: "Duration",
        description: "1-3 months per course"
      },
      {
        icon: <Loader2 className="w-6 h-6" />,
        title: "Focus",
        description: "Specific VFX skills"
      },
      {
        icon: <Loader2 className="w-6 h-6" />,
        title: "Outcome",
        description: "Course certificates"
      }
    ]
  },
  degreeProgram: {
    icon: <Loader2 className="w-8 h-8 text-purple-600" />,
    title: "Degree Program",
    description: "Become a complete VFX artist",
    color: "purple",
    type: 'DEGREE_PROGRAM' as const,
    features: [
      {
        icon: <Loader2 className="w-6 h-6" />,
        title: "Duration",
        description: "12-24 months program"
      },
      {
        icon: <Loader2 className="w-6 h-6" />,
        title: "Focus",
        description: "Complete VFX education"
      },
      {
        icon: <Loader2 className="w-6 h-6" />,
        title: "Outcome",
        description: "Professional degree"
      }
    ]
  }
}

export function CareerPathSelection() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState<CareerPathType | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const handleSelectPath = async (type: CareerPathType) => {
    if (isSubmitting) return
    
    setIsSubmitting(type)
    setError(null)
  
    try {
      const response = await fetch('/api/onboarding/career-path', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type })
      })
  
      const data = await response.json()
      console.log('Response data:', data)
  
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to save career path')
      }
  
      toast({
        title: "Path selected",
        description: "Your career path has been saved successfully.",
      })
  
      // Wait for toast
      await new Promise((resolve) => setTimeout(resolve, 1000))
  
      // Use router.refresh() to update server data
      router.refresh()
  
      // Then navigate after a small delay
      setTimeout(() => {
        window.location.href = data.data.nextRoute
      }, 100)
  
    } catch (error) {
      const message = error instanceof Error 
        ? error.message 
        : 'Failed to save your selection'
      
      setError(message)
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(null)
    }
  }

  const renderPathCard = (path: typeof pathFeatures.shortCourse | typeof pathFeatures.degreeProgram) => (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            {path.icon}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
          <p className="text-gray-600 mt-2">{path.description}</p>
        </div>

        <div className="space-y-6">
          {path.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-gray-600">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button 
          className="w-full mt-6"
          onClick={() => handleSelectPath(path.type)}
          disabled={isSubmitting !== null}
        >
          {isSubmitting === path.type ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Selecting...
            </>
          ) : (
            `Choose ${path.title}`
          )}
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Choose Your Path</h1>
        <p className="text-gray-600">Select the journey that best fits your goals</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {renderPathCard(pathFeatures.shortCourse)}
        {renderPathCard(pathFeatures.degreeProgram)}
      </div>

      {/* Help Section */}
      <Card className="mt-8">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Need Help Deciding?</h2>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => router.push('/advisor')}
              disabled={isSubmitting !== null}
            >
              Talk to an Advisor
            </Button>
            <Button 
              variant="outline"
              onClick={() => router.push('/compare')}
              disabled={isSubmitting !== null}
            >
              Compare Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}