// src/lib/services/course-service.ts

import { prisma } from '@/lib/prisma'
import { CourseCreateInput, CourseFilters } from '@/types/courses'

export class CourseService {
  static async getCourses({
    filters,
    sort,
    page,
    limit,
  }: {
    filters: CourseFilters
    sort: { field: string; order: 'asc' | 'desc' }
    page: number
    limit: number
  }) {
    const where = {
      AND: [
        filters.search ? {
          OR: [
            { title: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } },
          ],
        } : {},
        filters.level ? { level: filters.level } : {},
        filters.category ? { categoryId: filters.category } : {},
      ],
    }

    const [courses, totalCourses] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          instructor: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          category: true,
          _count: {
            select: {
              enrollments: true,
              resources: true,
              curricula: true
            },
          },
        },
        take: limit,
        skip: limit * (page - 1),
        orderBy: { [sort.field]: sort.order },
      }),
      prisma.course.count({ where })
    ])

    return {
      courses,
      totalPages: Math.ceil(totalCourses / limit),
      totalCourses,
    }
  }

  static async createCourse(data: CourseCreateInput) {
    return await prisma.course.create({
      data: {
        title: data.title,
        description: data.description,
        instructorId: data.instructorId,
        level: data.level,
        categoryId: data.categoryId,
        price: data.price,
        duration: data.duration,
      },
      include: {
        instructor: true,
        category: true,
        _count: {
          select: {
            enrollments: true,
            resources: true,
            curricula: true
          }
        }
      }
    })
  }
}