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
  progress?: {
    completed: boolean
  }
}

interface CourseListProps {
  initialCourses: Course[]
}

type FilterStatus = 'all' | 'in-progress' | 'completed'

const filterOptions = [
  { value: "all", label: "All courses" },
  { value: "in-progress", label: "In progress" },
  { value: "completed", label: "Completed" }
]

export function CourseList({ initialCourses }: CourseListProps) {
  const [courses] = useState<Course[]>(initialCourses)
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')
  const [searchQuery, setSearchQuery] = useState('')

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
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Select onValueChange={(value) => setFilterStatus(value as FilterStatus)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Link key={course.id} href={`/dashboard/courses/${course.id}`}>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="aspect-video overflow-hidden rounded-md">
                {course.thumbnail ? (
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-secondary">
                    <span className="text-muted-foreground">No thumbnail</span>
                  </div>
                )}
              </div>
              <div className="p-2">
                <h3 className="font-semibold">{course.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {course.description}
                </p>
                {course.progress && (
                  <Progress 
                    value={course.progress.completed ? 100 : 0} 
                    className="mt-2"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
