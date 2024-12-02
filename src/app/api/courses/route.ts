// src/app/api/courses/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { CourseService } from '@/lib/api/services/course-service'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { CourseCreateInput, CourseFilters } from '@/types/courses'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    
    // Parse query parameters
    const filters: CourseFilters = {
      search: searchParams.get('search') || undefined,
      level: searchParams.get('level') || undefined,
      category: searchParams.get('category') || undefined,
    }
    
    const sort = searchParams.get('sort')?.split('-') || ['createdAt', 'desc']
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const result = await CourseService.getCourses({
      filters,
      sort: { field: sort[0], order: sort[1] as 'asc' | 'desc' },
      page,
      limit,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data: CourseCreateInput = await req.json()
    
    // Validate instructor role
    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Only instructors can create courses' },
        { status: 403 }
      )
    }

    const course = await CourseService.createCourse({
      ...data,
      instructorId: session.user.id,
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error('Error creating course:', error)
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    )
  }
}