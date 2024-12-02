// src/lib/api/services/course-service.ts

import { prisma } from '@/lib/prisma'
import { CourseCreateInput, CourseUpdateInput, CourseFilters } from '@/types/courses'

export class CourseService {
  /**
   * Create a new course
   */
  static async createCourse(data: CourseCreateInput) {
    return await prisma.course.create({
      data: {
        title: data.title,
        description: data.description,
        instructorId: data.instructorId,
        // Add other course fields
        resources: {
          create: data.resources,
        },
      },
      include: {
        instructor: true,
        resources: true,
      },
    })
  }

  /**
   * Get courses with filtering, sorting and pagination
   */
  static async getCourses({
    filters,
    sort,
    page = 1,
    limit = 10,
  }: {
    filters?: CourseFilters
    sort?: { field: string; order: 'asc' | 'desc' }
    page?: number
    limit?: number
  }) {
    const where = {
      ...(filters?.level && { level: filters.level }),
      ...(filters?.search && {
        OR: [
          { title: { contains: filters.search, mode: 'insensitive' } },
          { description: { contains: filters.search, mode: 'insensitive' } },
        ],
      }),
      // Add other filters
    }

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          instructor: true,
          resources: true,
          enrollments: true,
          progress: true,
        },
        orderBy: sort ? { [sort.field]: sort.order } : { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.course.count({ where }),
    ])

    return {
      courses,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    }
  }

  /**
   * Get a single course by ID with full details
   */
  static async getCourseById(id: string) {
    return await prisma.course.findUnique({
      where: { id },
      include: {
        instructor: true,
        resources: true,
        enrollments: true,
        progress: true,
      },
    })
  }

  /**
   * Update course details
   */
  static async updateCourse(id: string, data: CourseUpdateInput) {
    return await prisma.course.update({
      where: { id },
      data: {
        ...data,
        resources: {
          upsert: data.resources?.map(resource => ({
            where: { id: resource.id || '' },
            create: resource,
            update: resource,
          })),
        },
      },
      include: {
        instructor: true,
        resources: true,
      },
    })
  }

  /**
   * Delete a course
   */
  static async deleteCourse(id: string) {
    return await prisma.course.delete({
      where: { id },
    })
  }

  /**
   * Enroll a student in a course
   */
  static async enrollStudent(courseId: string, studentId: string) {
    return await prisma.enrollment.create({
      data: {
        courseId,
        userId: studentId,
        status: 'ACTIVE',
      },
      include: {
        course: true,
        user: true,
      },
    })
  }

  /**
   * Update student progress in a course
   */
  static async updateProgress(courseId: string, studentId: string, progress: number) {
    return await prisma.studentProgress.upsert({
      where: {
        userId_courseId: {
          userId: studentId,
          courseId,
        },
      },
      create: {
        userId: studentId,
        courseId,
        progress,
        lastUpdated: new Date(),
      },
      update: {
        progress,
        lastUpdated: new Date(),
      },
    })
  }

  /**
   * Get course statistics
   */
  static async getCourseStats(courseId: string) {
    const [enrollments, progress, ratings] = await Promise.all([
      prisma.enrollment.count({
        where: { courseId },
      }),
      prisma.studentProgress.aggregate({
        where: { courseId },
        _avg: {
          progress: true,
        },
      }),
      prisma.courseRating.aggregate({
        where: { courseId },
        _avg: {
          rating: true,
        },
      }),
    ])

    return {
      totalEnrollments: enrollments,
      averageProgress: progress._avg.progress || 0,
      averageRating: ratings._avg.rating || 0,
    }
  }
  static async getEnrolledCourses(userId: string, params: {
    page: number;
    pageSize: number;
    search?: string;
    level?: string;
    category?: string;
  }) {
    const where = {
      enrollments: {
        some: { userId }
      },
      AND: [
        params.search ? {
          OR: [
            { title: { contains: params.search, mode: 'insensitive' } },
            { description: { contains: params.search, mode: 'insensitive' } },
          ],
        } : {},
        params.level !== 'all' ? { level: params.level } : {},
        params.category !== 'all' ? { categoryId: params.category } : {},
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
        skip: (params.page - 1) * params.pageSize,
        take: params.pageSize,
      }),
      prisma.course.count({ where })
    ])
  
    const progress = await prisma.studentProgress.findMany({
      where: {
        userId,
        courseId: { in: courses.map(c => c.id) },
      },
    })
  
    return {
      courses,
      progress: Object.fromEntries(
        progress.map(p => [p.courseId, {
          percentage: p.progress,
          lastUpdated: p.lastUpdated
        }])
      ),
      totalPages: Math.ceil(totalCourses / params.pageSize),
      totalCourses,
    }
  }
}