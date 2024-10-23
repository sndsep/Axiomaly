import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'
import { db } from '@/lib/db/db'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { courseId, completed } = await req.json()

    const progress = await db.progress.upsert({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId
        }
      },
      update: {
        completed,
        lastAccessed: new Date()
      },
      create: {
        userId: session.user.id,
        courseId,
        completed,
      }
    })

    return NextResponse.json(progress)
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 })
  }
}