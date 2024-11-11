import { useState } from 'react'
import { useToast } from '@/components/ui/hooks/use-toast'
import { useRouter } from 'next/navigation'

interface UseEnrollmentOptions {
  onSuccess?: (courseId: string) => void
  onError?: (error: Error) => void
}

export function useCourseEnrollment(options: UseEnrollmentOptions = {}) {
  const [isEnrolling, setIsEnrolling] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const enrollInCourse = async (courseId: string) => {
    setIsEnrolling(true)
    try {
      const response = await fetch(`/api/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to enroll in course')
      }

      const data = await response.json()
      
      toast({
        title: "¡Inscripción exitosa!",
        description: "Has sido inscrito en el curso correctamente."
      })

      options.onSuccess?.(courseId)
      router.refresh()
      
      return data
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Error al inscribirse en el curso')
      
      toast({
        variant: "destructive",
        title: "Error de inscripción",
        description: err.message
      })
      
      options.onError?.(err)
      throw err
    } finally {
      setIsEnrolling(false)
    }
  }

  return {
    isEnrolling,
    enrollInCourse
  }
}
