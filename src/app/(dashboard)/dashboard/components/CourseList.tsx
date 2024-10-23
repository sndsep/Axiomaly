// src/app/(dashboard)/dashboard/components/CourseList.tsx
"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Search, Filter } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  progress?: {
    completed: boolean
  }
}

interface CourseListProps {
  initialCourses: Course[]
}

type FilterStatus = 'all' | 'in-progress' | 'completed'

const filterOptions = [
  { value: "all", label: "Todos los cursos" },
  { value: "in-progress", label: "En progreso" },
  { value: "completed", label: "Completados" }
]

export function CourseList({ initialCourses }: CourseListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')
  const [courses, setCourses] = useState(initialCourses)

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === 'all' 
      ? true 
      : filterStatus === 'completed' 
        ? course.progress?.completed 
        : !course.progress?.completed

    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar cursos..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as FilterStatus)}
          options={filterOptions}
          placeholder="Filtrar por estado"
          className="w-[180px]"
        />
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No se encontraron cursos</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          // src/app/(dashboard)/dashboard/components/CourseList.tsx
{filteredCourses.map((course) => (
  <Link
    key={course.id}
    href={`/dashboard/courses/${course.id}`}
    className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
  >
    <div className="aspect-video relative">
      <Image
        src={course.thumbnail || '/images/course-placeholder.jpg'}
        alt={course.title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold line-clamp-1">{course.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
        {course.description}
      </p>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {course.progress?.completed ? 'Completado' : 'En progreso'}
          </span>
          <span className="font-medium">
            {course.progress?.completed ? '100%' : '0%'}
          </span>
        </div>
        <Progress 
          value={course.progress?.completed ? 100 : 0} 
          className="h-2" 
        />
      </div>
    </div>
  </Link>
))}
        </div>
      )}
    </div>
  )
}