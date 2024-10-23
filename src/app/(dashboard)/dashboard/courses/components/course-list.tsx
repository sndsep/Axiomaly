"use client"

import { Course } from "@/types/course"
import { CourseCard } from "./course-card"

interface CourseListProps {
  courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onEnroll={() => {
            // Implementa la lógica de inscripción
            console.log(`Enrolling in course: ${course.id}`)
          }}
        />
      ))}
    </div>
  )
}