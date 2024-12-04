// src/lib/api/services/course-service.ts
import { prisma } from '@/lib/prisma'
import { CourseCreateInput, CourseUpdateInput, CourseFilters } from '@/types/courses'

export class CourseService {
 static async createCourse(data: CourseCreateInput) {
   console.log('Creating course with data:', data)
   return await prisma.course.create({
     data: {
       title: data.title,
       description: data.description,
       instructorId: data.instructorId,
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
   console.log('Getting courses with params:', { filters, sort, page, limit })

   const where = {
     ...(filters?.level && { level: filters.level }),
     ...(filters?.search && {
       OR: [
         { title: { contains: filters.search, mode: 'insensitive' } },
         { description: { contains: filters.search, mode: 'insensitive' } },
       ],
     }),
   }

   console.log('Query where clause:', where)

   try {
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

     console.log('Found courses:', courses.length)

     return {
       courses,
       pagination: {
         total,
         pages: Math.ceil(total / limit),
         page,
         limit,
       },
     }
   } catch (error) {
     console.error('Error getting courses:', error)
     throw error
   }
 }

 static async getCourseById(id: string) {
   console.log('Getting course by ID:', id)
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

 static async updateCourse(id: string, data: CourseUpdateInput) {
   console.log('Updating course:', id, data)
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

 static async deleteCourse(id: string) {
   console.log('Deleting course:', id)
   return await prisma.course.delete({
     where: { id },
   })
 }

 static async enrollStudent(courseId: string, studentId: string) {
   console.log('Enrolling student:', studentId, 'in course:', courseId)
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

 static async updateProgress(courseId: string, studentId: string, progress: number) {
   console.log('Updating progress for student:', studentId, 'in course:', courseId, 'progress:', progress)
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

 static async getCourseStats(courseId: string) {
   console.log('Getting stats for course:', courseId)
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
   console.log('Getting enrolled courses for user:', userId, 'with params:', params)

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

   console.log('Query where clause:', where)

   try {
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

     console.log('Found courses:', courses.length, 'Total courses:', totalCourses)

     const progress = await prisma.studentProgress.findMany({
       where: {
         userId,
         courseId: { in: courses.map(c => c.id) },
       },
     })

     console.log('Progress records found:', progress.length)

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
   } catch (error) {
     console.error('Error in getEnrolledCourses:', error)
     throw error
   }
 }
}