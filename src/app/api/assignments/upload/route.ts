// src/app/api/assignments/upload/route.ts
import { NextResponse } from 'next/response'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { put } from '@vercel/blob'
import { revalidatePath } from 'next/cache'

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get form data
    const formData = await req.formData()
    const file = formData.get('file') as File
    const assignmentId = formData.get('assignmentId') as string
    const courseId = formData.get('courseId') as string

    if (!file || !assignmentId || !courseId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate file
    const maxSize = 100 * 1024 * 1024 // 100MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large' },
        { status: 400 }
      )
    }

    // Validate allowed types
    const allowedTypes = [
      'application/pdf',
      'application/zip',
      'video/mp4',
      'image/png',
      'image/jpeg'
    ]
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'File type not allowed' },
        { status: 400 }
      )
    }

    // Upload to blob storage
    const blob = await put(
      `assignments/${courseId}/${assignmentId}/${file.name}`,
      file,
      {
        access: 'private',
        addRandomSuffix: true
      }
    )

    // Create submission record
    const submission = await prisma.assignmentSubmission.create({
      data: {
        assignmentId,
        userId: session.user.id,
        fileUrl: blob.url,
        status: 'SUBMITTED',
        submittedAt: new Date()
      }
    })

    // Update student progress
    await prisma.studentProgress.upsert({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId
        }
      },
      update: {
        lastUpdated: new Date()
      },
      create: {
        userId: session.user.id,
        courseId,
        progress: 0,
        lastUpdated: new Date()
      }
    })

    revalidatePath(`/courses/${courseId}/assignments/${assignmentId}`)

    return NextResponse.json({
      success: true,
      submission
    })

  } catch (error) {
    console.error('Error in file upload:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const assignmentId = searchParams.get('assignmentId')

    if (!assignmentId) {
      return NextResponse.json(
        { error: 'Missing assignmentId' },
        { status: 400 }
      )
    }

    const submissions = await prisma.assignmentSubmission.findMany({
      where: {
        assignmentId,
        userId: session.user.id
      },
      orderBy: {
        submittedAt: 'desc'
      }
    })

    return NextResponse.json(submissions)

  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}