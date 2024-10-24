import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'
import { CourseList } from '../components/CourseList'
import { redirect } from 'next/navigation'
import prisma from "@/lib/db"
import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'

export default async function CoursesPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }

  const courses = await fetchCourses(1) // Carga inicial

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <CourseList initialCourses={courses.courses} />
    </div>
  )
}

// Optimizar las consultas a la base de datos
async function fetchCourses(page: number) {
  const pageSize = 10;
  const courses = await prisma.course.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
    include: {
      instructor: {
        select: {
          name: true
        }
      },
      _count: {
        select: {
          enrollments: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const totalCourses = await prisma.course.count();

  return {
    courses,
    nextCursor: page < Math.ceil(totalCourses / pageSize) ? page + 1 : undefined,
  };
}
