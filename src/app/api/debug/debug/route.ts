// src/app/api/debug/enrollments/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const enrollments = await prisma.enrollment.findMany({
    include: {
      course: true,
      user: true
    }
  })

  return NextResponse.json({ enrollments })
}