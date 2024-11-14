// src/components/onboarding/CareerPathForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Rocket, GraduationCap } from 'lucide-react'

type CareerPathType = 'SHORT_COURSE' | 'DEGREE_PROGRAM'

export default function CareerPathForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<CareerPathType | null>(null)

  const handlePathSelection = async (type: CareerPathType) => {
    try {
      setIsLoading(type)
      
      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      })

      if (!response.ok) {
        throw new Error('Failed to save career path')
      }

      // Redirect based on path type
      const redirectPath = type === 'SHORT_COURSE' 
        ? '/onboarding/short-course'
        : '/onboarding/degree-program'
      
      router.push(redirectPath)
    } catch (error) {
      console.error('Error saving career path:', error)
      setIsLoading(null)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Choose Your Learning Path
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Select the journey that best fits your goals and schedule
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Short Course Path */}
        <button
          onClick={() => handlePathSelection('SHORT_COURSE')}
          disabled={isLoading !== null}
          className="relative flex flex-col p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-100 mb-4">
            <Rocket className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Short Course</h3>
          <p className="mt-2 text-gray-500">
            Master specific VFX skills quickly through focused, individual courses
          </p>
          {isLoading === 'SHORT_COURSE' && (
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-2xl">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            </div>
          )}
        </button>

        {/* Degree Program Path */}
        <button
          onClick={() => handlePathSelection('DEGREE_PROGRAM')}
          disabled={isLoading !== null}
          className="relative flex flex-col p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-100 mb-4">
            <GraduationCap className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Degree Program</h3>
          <p className="mt-2 text-gray-500">
            Comprehensive education to become a well-rounded VFX professional
          </p>
          {isLoading === 'DEGREE_PROGRAM' && (
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-2xl">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
            </div>
          )}
        </button>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Don't worry, you can always change your path later
      </div>
    </div>
  )
}