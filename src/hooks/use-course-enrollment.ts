// src/hooks/use-course-enrollment.ts

export function useCourseEnrollment(courseId: string) {
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const checkEnrollmentStatus = useCallback(async () => {
    try {
      const response = await fetch(`/api/courses/${courseId}/enrollment`)
      if (!response.ok) throw new Error('Failed to check enrollment status')
      
      const data = await response.json()
      setIsEnrolled(data.isEnrolled)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check enrollment')
    }
  }, [courseId])

  const enrollInCourse = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/courses/${courseId}/enroll`, {
        method: 'POST',
      })
      
      if (!response.ok) throw new Error('Failed to enroll in course')
      
      setIsEnrolled(true)
      toast({
        title: "Success",
        description: "Successfully enrolled in course",
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to enroll in course'
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      })
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [courseId, toast])

  useEffect(() => {
    checkEnrollmentStatus()
  }, [checkEnrollmentStatus])

  return {
    isEnrolled,
    isLoading,
    error,
    enrollInCourse
  }
}