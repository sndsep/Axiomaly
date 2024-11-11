// src/components/dashboard/courses/course-dashboard.tsx
'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCourses } from '@/lib/api/courses'
import { CourseList } from '@/components/course/course-list'
import { CourseFilters } from './course-filters'
import { CourseFilters as CourseFiltersType } from '@/types/filters'
import { Course } from '@/types/course'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useDebounce } from '@/hooks/use-debounce'

const initialFilters: CourseFiltersType = {
  level: 'all',
  progress: 'all'
}

export function CourseDashboard() {
  const [filters, setFilters] = useState<CourseFiltersType>(initialFilters)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses', filters, debouncedSearch],
    queryFn: () => getCourses({ ...filters, search: debouncedSearch })
  })

  const handleFilterChange = (newFilters: Partial<CourseFiltersType>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const filteredCourses = filterCourses(courses, filters)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Mis Cursos</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar cursos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
          <CourseFilters 
            onFilterChange={handleFilterChange}
            currentFilters={filters}
          />
        </div>
      </div>

      {isLoading ? (
        <CourseListSkeleton />
      ) : filteredCourses.length > 0 ? (
        <CourseList courses={filteredCourses} />
      ) : (
        <EmptyState 
          title="No se encontraron cursos"
          description="Prueba ajustando los filtros o la búsqueda"
        />
      )}
    </div>
  )
}

function filterCourses(courses: Course[], filters: CourseFiltersType): Course[] {
  return courses.filter(course => {
    if (filters.level !== 'all' && course.level !== filters.level) {
      return false
    }
    
    if (filters.progress !== 'all') {
      if (filters.progress === 'not-started' && course.progress?.percentage !== 0) {
        return false
      }
      if (filters.progress === 'in-progress' && 
          (course.progress?.percentage === 0 || course.progress?.percentage === 100)) {
        return false
      }
      if (filters.progress === 'completed' && course.progress?.percentage !== 100) {
        return false
      }
    }

    return true
  })
}

function CourseListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-[300px] rounded-lg bg-gray-100 animate-pulse" />
      ))}
    </div>
  )
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  )
}