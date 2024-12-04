// src/app/api/debug/courses/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const [courses, enrollments, categories] = await Promise.all([
    prisma.course.count(),
    prisma.enrollment.count(),
    prisma.category.count()
  ])

  return NextResponse.json({
    counts: {
      courses,
      enrollments,
      categories
    }
  })
}