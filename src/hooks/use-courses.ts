// src/hooks/use-courses.ts

import { useState, useCallback } from 'react'
import { CourseFilters, Course, PaginatedResponse } from '@/types/courses'
import { useToast } from '@/components/ui/use-toast'

interface UseCourseOptions {
  initialData?: PaginatedResponse<Course>
  pageSize?: number
}

export function useCourses({ initialData, pageSize = 10 }: UseCourseOptions = {}) {
  const [courses, setCourses] = useState<Course[]>(initialData?.data || [])
  const [totalPages, setTotalPages] = useState(initialData?.pagination.totalPages || 0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchCourses = useCallback(async (
    filters?: CourseFilters,
    page = 1,
    sort?: { field: string; order: 'asc' | 'desc' }
  ) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // Build query params
      const params = new URLSearchParams()
      if (filters?.search) params.set('search', filters.search)
      if (filters?.level) params.set('level', filters.level)
      if (filters?.category) params.set('category', filters.category)
      if (sort) params.set('sort', `${sort.field}-${sort.order}`)
      params.set('page', page.toString())
      params.set('limit', pageSize.toString())

      const response = await fetch(`/api/courses?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to fetch courses')

      const data = await response.json()
      setCourses(data.courses)
      setTotalPages(data.pagination.pages)
      setCurrentPage(page)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch courses')
      toast({
        title: "Error",
        description: "Failed to load courses. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [pageSize, toast])

  const createCourse = useCallback(async (courseData: Partial<Course>) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      })
      
      if (!response.ok) throw new Error('Failed to create course')
      
      const newCourse = await response.json()
      setCourses(prev => [newCourse, ...prev])
      
      toast({
        title: "Success",
        description: "Course created successfully",
      })
      
      return newCourse
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create course'
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      })
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  const updateCourse = useCallback(async (courseId: string, courseData: Partial<Course>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/courses/${courseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      })
      
      if (!response.ok) throw new Error('Failed to update course')
      
      const updatedCourse = await response.json()
      setCourses(prev => prev.map(course => 
        course.id === courseId ? updatedCourse : course
      ))
      
      toast({
        title: "Success",
        description: "Course updated successfully",
      })
      
      return updatedCourse
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update course'
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      })
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  return {
    courses,
    isLoading,
    error,
    currentPage,
    totalPages,
    fetchCourses,
    createCourse,
    updateCourse,
  }
}