// src/app/(authenticated)/courses/[courseId]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { CourseDetail } from '@/components/courses/detail/CourseDetail'
import type { CourseWithRelations } from '@/types/courses'

// Types
interface CourseDetailsPageProps {
  params: {
    courseId: string
  }
}

// Get course data with all related information
async function getCourseDetails(courseId: string): Promise<CourseWithRelations | null> {
  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        resources: true,
        enrollments: true,
      },
    })

    if (!course) return null

    // Get enrollment count
    const enrollmentCount = await prisma.enrollment.count({
      where: { courseId }
    })

    // Get average rating if we implement it later
    // const averageRating = ...

    return {
      ...course,
      enrollmentCount,
      // averageRating,
    }
  } catch (error) {
    console.error('Error fetching course details:', error)
    throw error
  }
}

// Get user's enrollment status and progress if enrolled
async function getUserCourseStatus(userId: string, courseId: string) {
  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        }
      },
      include: {
        lesson: true,
      }
    })

    const progress = enrollment ? await prisma.studentProgress.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        }
      }
    }) : null

    return {
      isEnrolled: !!enrollment,
      currentLesson: enrollment?.lesson,
      progress: progress?.progress || 0,
      status: enrollment?.status || null,
    }
  } catch (error) {
    console.error('Error fetching user course status:', error)
    throw error
  }
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return notFound()
  }

  const courseId = params.courseId
  const [courseDetails, userStatus] = await Promise.all([
    getCourseDetails(courseId),
    getUserCourseStatus(session.user.id, courseId)
  ])

  if (!courseDetails) {
    return notFound()
  }

  return <CourseDetails course={courseDetails} userStatus={userStatus} />
}