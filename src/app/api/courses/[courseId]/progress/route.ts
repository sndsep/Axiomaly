// src/app/api/courses/[courseId]/progress/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const progress = await prisma.studentProgress.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: params.courseId,
        }
      },
      include: {
        lessonProgress: {
          include: {
            lesson: true
          }
        }
      }
    })

    return NextResponse.json({
      overall: progress?.progress || 0,
      lessons: progress?.lessonProgress || []
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch progress' },
      { status: 500 }
    )
  }
}