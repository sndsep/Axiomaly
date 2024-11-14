// src/components/dashboard/courses/course-dashboard.tsx
'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCourses } from '@/lib/api/courses'

export function CourseDashboard() {
  const [filters, setFilters] = useState({ level: 'all', progress: 'all' })

  const { data: courses = [], isLoading, isError } = useQuery({
    queryKey: ['courses', filters],
    queryFn: () => getCourses(filters),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading courses.</div>

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  )
}