// src/components/dashboard/CourseDashboard.tsx
'use client'

import { useEffect, useState } from 'react'
import { CourseCard } from '@/components/courses/cards/course-card'

export default function CourseDashboard() {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dashboard/enrolled-courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data.courses)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}
