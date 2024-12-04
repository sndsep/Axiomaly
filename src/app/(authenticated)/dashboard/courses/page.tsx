// src/app/(authenticated)/dashboard/courses/page.tsx
'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CourseFilters } from '@/components/courses/filters/course-filters'
import { CourseGrid } from '@/components/courses/list/course-grid'
import { CoursePagination } from '@/components/courses/list/course-pagination'
import { type CourseWithRelations, type CourseFilters as FilterTypes } from '@/types/courses'
import { useToast } from '@/components/ui/hooks/use-toast'

interface CourseResponse {
  courses: CourseWithRelations[]
  progress: Record<string, { percentage: number; lastUpdated: Date }>
  totalPages: number
  totalCourses: number
}

export default function CoursesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<CourseResponse | null>(null)
  
  // Get current filter values from URL using useCallback to memoize
  const getCurrentFilters = useCallback(() => ({
    search: searchParams.get('search') || '',
    level: searchParams.get('level') as any || 'all',
    category: searchParams.get('category') || 'all',
    page: Number(searchParams.get('page')) || 1,
    pageSize: Number(searchParams.get('pageSize')) || 9,
    sort: searchParams.get('sort') || 'recent'
  }), [searchParams])

  // Memoized fetch function
  const fetchCourses = useCallback(async () => {
    const filters = getCurrentFilters()
    const params = new URLSearchParams({
      ...filters,
      page: filters.page.toString(),
      pageSize: filters.pageSize.toString(),
    })

    try {
      const response = await fetch(`/api/dashboard/enrolled-courses?${params}`)
      if (!response.ok) throw new Error('Failed to fetch courses')
      return await response.json()
    } catch (err) {
      throw err
    }
  }, [getCurrentFilters])

  // Effect for fetching data
  useEffect(() => {
    let mounted = true

    const loadCourses = async () => {
      if (!mounted) return
      
      setIsLoading(true)
      setError(null)

      try {
        const result = await fetchCourses()
        if (mounted) {
          setData(result)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'An error occurred')
          toast({
            title: "Error",
            description: "Failed to load courses. Please try again.",
            variant: "destructive",
          })
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    loadCourses()

    return () => {
      mounted = false
    }
  }, [fetchCourses, toast])

  // Handle filter changes
  const handleFilterChange = useCallback((newFilters: FilterTypes) => {
    const params = new URLSearchParams(searchParams)
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    
    params.set('page', '1') // Reset to first page
    router.push(`/dashboard/courses?${params.toString()}`)
  }, [searchParams, router])

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push(`/dashboard/courses?${params.toString()}`)
  }, [searchParams, router])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">My Courses</h1>
        <CourseFilters 
          currentFilters={getCurrentFilters()}
          onFilterChange={handleFilterChange}
        />
      </div>

      {error ? (
        <div className="text-center py-8">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 text-blue-600 hover:underline"
          >
            Try again
          </button>
        </div>
      ) : (
        <>
          <CourseGrid 
            courses={data?.courses || []}
            progress={data?.progress || {}}
            isLoading={isLoading}
          />

          {data && data.totalPages > 1 && (
            <div className="mt-8">
              <CoursePagination
                currentPage={getCurrentFilters().page}
                totalPages={data.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}

          {!isLoading && data?.courses.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No courses found matching your criteria.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}