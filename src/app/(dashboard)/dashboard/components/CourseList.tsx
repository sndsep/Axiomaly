// src/app/(dashboard)/dashboard/components/CourseList.tsx
"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  instructor: {
    name: string
  }
  _count: {
    enrollments: number
  }
  progress?: {
    completed: boolean
  }
}

interface CourseListProps {
  initialCourses: Course[]
}

export function CourseList({ initialCourses }: CourseListProps) {
  const [courses, setCourses] = useState(initialCourses)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all')

  // Implementar lógica de filtrado y búsqueda aquí

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All courses</SelectItem>
            <SelectItem value="in-progress">In progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="group relative">
              {/* Card content */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
