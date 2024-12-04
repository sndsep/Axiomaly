// src/lib/api/courses.ts
import { prisma } from '@/lib/db'
import { type CourseFilters, type CoursesResponse } from '@/types/courses'

export async function getAllCourses(filters: CourseFilters): Promise<CoursesResponse> {
 const { search, category, level, sort, page = 1, limit = 10 } = filters
 const skip = (page - 1) * limit

 const where = {
   AND: [
     search ? {
       OR: [
         { title: { contains: search, mode: 'insensitive' } },
         { description: { contains: search, mode: 'insensitive' } }
       ]
     } : {},
     category ? { categoryId: category } : {},
     level ? { level } : {}
   ]
 }

 const [courses, total, categories] = await Promise.all([
   prisma.course.findMany({
     where,
     include: {
       instructor: {
         select: {
           id: true,
           name: true,
           image: true
         }
       },
       category: true,
       lessons: true,
       enrollments: true,
       _count: {
         select: {
           enrollments: true,
           lessons: true
         }
       }
     },
     orderBy: getOrderBy(sort),
     skip,
     take: limit
   }),
   prisma.course.count({ where }),
   prisma.category.findMany()
 ])

 const stats = await getAggregatedStats()

 return {
   data: courses,
   totalItems: total,
   totalPages: Math.ceil(total / limit),
   stats,
   filters: {
     categories,
     levels: ['beginner', 'intermediate', 'advanced']
   }
 }
}

export async function getEnrolledCourses(
 userId: string, 
 filters: Partial<CourseFilters> = {}
): Promise<CoursesResponse> {
 const { search, page = 1, limit = 10 } = filters
 const skip = (page - 1) * limit

 const where = {
   userId,
   course: search ? {
     OR: [
       { title: { contains: search, mode: 'insensitive' } },
       { description: { contains: search, mode: 'insensitive' } }
     ]
   } : {}
 }

 const [enrollments, total] = await Promise.all([
   prisma.enrollment.findMany({
     where,
     include: {
       course: {
         include: {
           instructor: true,
           category: true,
           lessons: true,
           _count: true
         }
       }
     },
     skip,
     take: limit
   }),
   prisma.enrollment.count({ where })
 ])

 return {
   data: enrollments.map(e => ({
     ...e.course,
     progress: {
       percentage: e.progress,
       lastUpdated: e.updatedAt,
       completedLessons: getCompletedLessons(e),
       totalLessons: e.course.lessons.length
     }
   })),
   totalItems: total,
   totalPages: Math.ceil(total / limit)
 }
}

function getOrderBy(sort?: string) {
 switch (sort) {
   case 'title-asc': return { title: 'asc' }
   case 'title-desc': return { title: 'desc' }
   case 'popular': return { enrollments: { _count: 'desc' } }
   case 'newest': return { createdAt: 'desc' }
   default: return { createdAt: 'desc' }
 }
}

async function getAggregatedStats() {
 const stats = await prisma.course.aggregate({
   _avg: {
     rating: true,
     progress: true
   },
   _count: {
     lessons: true,
     enrollments: true
   }
 })

 return {
   totalStudents: stats._count.enrollments,
   averageProgress: stats._avg.progress || 0,
   completionRate: await getCompletionRate(),
   averageRating: stats._avg.rating || 0,
   totalLessons: stats._count.lessons,
   studentsCompleted: await getCompletedStudents()
 }
}

function getCompletedLessons(enrollment: any) {
 return enrollment.lessons?.filter((l: any) => l.completed).length || 0
}