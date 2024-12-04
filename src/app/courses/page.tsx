// src/app/dashboard/courses/page.tsx
'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { CourseWithRelations } from '@/types/courses'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Input } from '@/components/ui/forms/input'
import { Select } from '@/components/ui/forms/select'

interface EnrolledCoursesResponse {
  data: CourseWithRelations[]
  totalPages: number
  totalItems: number
}

export default function DashboardCoursesPage() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<EnrolledCoursesResponse | null>(null)

  const fetchEnrolledCourses = useCallback(async () => {
    const params = new URLSearchParams(searchParams)
    
    try {
      const response = await fetch(`/api/user/enrolled-courses?${params}`)
      if (!response.ok) throw new Error('Failed to fetch courses')
      return await response.json()
    } catch (err) {
      throw err
    }
  }, [searchParams])

  useEffect(() => {
    let mounted = true

    const loadCourses = async () => {
      if (!mounted) return
      
      setIsLoading(true)

      try {
        const result = await fetchEnrolledCourses()
        if (mounted) {
          setData(result)
        }
      } catch (err) {
        toast({
          title: "Error",
          description: "Failed to load your courses. Please try again.",
          variant: "destructive",
        })
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    loadCourses()
    return () => { mounted = false }
  }, [fetchEnrolledCourses, toast])

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <Input
          type="search"
          placeholder="Search courses..."
          className="flex-1"
        />
        <Select defaultValue="all">
          <option value="all">All Levels</option>
        </Select>
        <Select defaultValue="all">
          <option value="all">All Categories</option>
        </Select>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading...</div>
      ) : data?.data && data.data.length > 0 ? (
        <CourseGrid courses={data.data} />
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">No courses found. Browse our course catalog to get started.</p>
        </div>
      )}
    </div>
  )
}