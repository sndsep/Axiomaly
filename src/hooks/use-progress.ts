// src/hooks/use-progress.ts
'use client'

import { useState } from 'react'
import { CourseProgress } from '@/types/progress'
import { toast } from '@/components/ui/hooks/use-toast'

interface UseProgressOptions {
  onSuccess?: (progress: CourseProgress) => void
}

export function useProgress({ onSuccess }: UseProgressOptions = {}) {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateProgress = async (courseId: string, percentage: number) => {
    try {
      setIsUpdating(true)
      // Aquí iría la llamada a la API
      const response = await fetch(`/api/courses/${courseId}/progress`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ percentage }),
      })

      if (!response.ok) {
        throw new Error('Failed to update progress')
      }

      const updatedProgress = await response.json()
      onSuccess?.(updatedProgress)
      toast({
        title: "Progress Updated",
        description: `Course progress updated to ${percentage}%`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update progress",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  return {
    isUpdating,
    updateProgress,
  }
}