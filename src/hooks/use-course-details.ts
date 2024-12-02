// src/hooks/use-course-details.ts

export function useCourseDetails(courseId: string) {
    const [course, setCourse] = useState<Course | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { toast } = useToast()
  
    const fetchCourseDetails = useCallback(async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/courses/${courseId}`)
        if (!response.ok) throw new Error('Failed to fetch course details')
        
        const data = await response.json()
        setCourse(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch course details')
        toast({
          title: "Error",
          description: "Failed to load course details. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }, [courseId, toast])
  
    useEffect(() => {
      if (courseId) {
        fetchCourseDetails()
      }
    }, [courseId, fetchCourseDetails])
  
    return {
      course,
      isLoading,
      error,
      refetch: fetchCourseDetails
    }
  }