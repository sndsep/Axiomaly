// src/hooks/use-course-materials.ts
export function useCourseMaterials(courseId: string) {
    const [materials, setMaterials] = useState<Material[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { toast } = useToast()
  
    const fetchMaterials = useCallback(async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}/materials`)
        if (!response.ok) throw new Error('Failed to fetch materials')
        const data = await response.json()
        setMaterials(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load materials')
        toast({
          title: "Error",
          description: "Could not load course materials",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }, [courseId, toast])
  
    const downloadMaterial = useCallback(async (materialId: string) => {
      try {
        const response = await fetch(`/api/courses/${courseId}/materials/${materialId}/download`)
        if (!response.ok) throw new Error('Failed to download material')
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = materials.find(m => m.id === materialId)?.title || 'download'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to download material",
          variant: "destructive"
        })
      }
    }, [courseId, materials, toast])
  
    useEffect(() => {
      fetchMaterials()
    }, [fetchMaterials])
  
    return {
      materials,
      isLoading,
      error,
      downloadMaterial,
      refetch: fetchMaterials
    }
  }
  