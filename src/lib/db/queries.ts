import { prisma } from './db'
import { cache } from 'react'

export const getCourseWithDetails = cache(async (courseId: string) => {
  return await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      instructor: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      resources: {
        select: {
          id: true,
          title: true,
          type: true,
          url: true,
        },
        take: 5,
      },
      _count: {
        select: {
          students: true,
          resources: true,
        },
      },
    },
  })
})

export const getDashboardStats = cache(async (userId: string) => {
  const [coursesCount, completedCourses, totalTime] = await Promise.all([
    prisma.course.count({
      where: {
        students: {
          some: {
            userId,
          },
        },
      },
    }),
    prisma.enrollment.count({
      where: {
        userId,
        status: 'COMPLETED',
      },
    }),
    prisma.studentProgress.aggregate({
      where: { userId },
      _sum: {
        timeSpent: true,
      },
    }),
  ])

  return {
    coursesCount,
    completedCourses,
    totalTime: totalTime._sum.timeSpent || 0,
  }
})

