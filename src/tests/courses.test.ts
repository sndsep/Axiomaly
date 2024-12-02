// src/tests/courses.test.ts
import { describe, it } from 'node:test'
import assert from 'node:assert'
import { prisma } from '@/lib/prisma'
import { CourseService } from '@/lib/api/services/course-service'

describe('Course API Tests', async () => {
  it('should fetch all courses', async () => {
    const result = await CourseService.getCourses({
      filters: {},
      sort: { field: 'createdAt', order: 'desc' },
      page: 1,
      limit: 10
    })
    
    assert(result.courses.length > 0)
    console.log('Courses fetched:', result.courses.length)
  })

  it('should fetch enrolled courses for student', async () => {
    const student = await prisma.user.findUnique({
      where: { email: 'student@example.com' }
    })

    const result = await CourseService.getEnrolledCourses(student.id, {
      page: 1,
      pageSize: 10
    })

    assert(result.courses.length > 0)
    console.log('Enrolled courses:', result.courses.length)
  })
})