'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/forms/button'
import { Card, CardContent } from '@/components/ui/forms/card'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Rocket, GraduationCap, Clock, Target, Trophy, Loader2 } from 'lucide-react'

export function CareerPathSelection() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<'SHORT_COURSE' | 'DEGREE_PROGRAM' | null>(null)

  const handlePathSelection = async (type: 'SHORT_COURSE' | 'DEGREE_PROGRAM') => {
    if (isLoading) return

    setIsLoading(type)
    try {
      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      })

      if (!response.ok) {
        throw new Error('Failed to save career path')
      }

      toast({
        title: "Path selected",
        description: "Your learning path has been saved successfully.",
      })

      // Redirect to the appropriate onboarding path
      router.push('/onboarding/interests')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
        variant: "destructive",
      })
      setIsLoading(null)
    }
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Path</h1>
        <p className="text-xl text-gray-600">Select the journey that best fits your goals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Short Course Card */}
        <Card className="relative p-6">
          <div className="mb-6 text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Short Course</h2>
            <p className="text-gray-600">Master specific skills fast</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p className="text-gray-600">1-3 months per course</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Focus</h3>
                <p className="text-gray-600">Specific VFX skills</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Outcome</h3>
                <p className="text-gray-600">Course certificates</p>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => handlePathSelection('SHORT_COURSE')}
            disabled={!!isLoading}
          >
            {isLoading === 'SHORT_COURSE' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Selecting...
              </>
            ) : (
              'Choose Short Course'
            )}
          </Button>
        </Card>

        {/* Degree Program Card */}
        <Card className="relative p-6">
          <div className="mb-6 text-center">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold">Degree Program</h2>
            <p className="text-gray-600">Become a complete VFX artist</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p className="text-gray-600">12-24 months program</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold">Focus</h3>
                <p className="text-gray-600">Complete VFX education</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold">Outcome</h3>
                <p className="text-gray-600">Professional degree</p>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={() => handlePathSelection('DEGREE_PROGRAM')}
            disabled={!!isLoading}
          >
            {isLoading === 'DEGREE_PROGRAM' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Selecting...
              </>
            ) : (
              'Choose Degree Program'
            )}
          </Button>
        </Card>
      </div>

      <Card className="mt-8 p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Deciding?</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline">Talk to Advisor</Button>
            <Button variant="outline">Compare Details</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}