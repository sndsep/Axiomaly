// src/app/courses/page.tsx
'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CourseFilters } from '@/components/courses/filters/course-filters'
import { CourseGrid } from '@/components/courses/list/course-grid'
import { CoursePagination } from '@/components/courses/list/course-pagination'
import { type CourseWithRelations, type CourseFilters as FilterTypes } from '@/types/courses'
import { useToast } from '@/components/ui/hooks/use-toast'

interface CoursesResponse {
  data: CourseWithRelations[]
  totalPages: number
  totalItems: number
}

export default function BrowseCoursesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<CoursesResponse | null>(null)

  // Get current filter values
  const getCurrentFilters = useCallback(() => {
    const params = {
      search: searchParams.get('search') || '',
      level: searchParams.get('level') || undefined,
      category: searchParams.get('category') || undefined,
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 10,
      sort: searchParams.get('sort') || 'createdAt-desc'
    }
    return params
  }, [searchParams])

  // Fetch courses using existing service layer
  const fetchCourses = useCallback(async () => {
    const filters = getCurrentFilters()
    const params = new URLSearchParams()

    // Add only defined filters to query params
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value.toString())
      }
    })

    try {
      const response = await fetch(`/api/courses?${params}`)
      if (!response.ok) throw new Error('Failed to fetch courses')
      return await response.json()
    } catch (err) {
      throw err
    }
  }, [getCurrentFilters])

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
    
    // Only add defined filters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    
    // Reset to first page when filters change
    params.set('page', '1')
    
    router.push(`/courses?${params.toString()}`)
  }, [searchParams, router])

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push(`/courses?${params.toString()}`)
  }, [searchParams, router])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Browse All Courses</h1>
        <p className="text-gray-600 mb-6">
          Discover our comprehensive collection of VFX courses and start your learning journey
        </p>
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
            courses={data?.data || []}
            isLoading={isLoading}
            showEnrollButton
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

          {!isLoading && data?.data.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No courses found matching your criteria.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}