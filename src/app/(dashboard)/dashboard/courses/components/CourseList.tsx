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
import { Course } from "@/types/course"
import { CourseCard } from "./CourseCard"

interface CourseListProps {
  courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all')

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === 'all' 
      ? true 
      : filter === 'completed' 
        ? course.progress?.completed 
        : !course.progress?.completed
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          value={filter}
          onValueChange={(value: 'all' | 'in-progress' | 'completed') => setFilter(value)}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={() => {
              console.log(`Enrolling in course: ${course.id}`)
            }}
          />
        ))}
      </div>
    </div>
  )
}
