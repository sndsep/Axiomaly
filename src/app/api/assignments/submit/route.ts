// src/app/api/assignments/submit/route.ts
import { NextResponse } from 'next/response'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { assignmentId, courseId, comments } = body

    if (!assignmentId || !courseId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if assignment exists and is not past due
    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId },
      include: { course: true }
    })

    if (!assignment) {
      return NextResponse.json(
        { error: 'Assignment not found' },
        { status: 404 }
      )
    }

    if (assignment.dueDate && new Date() > assignment.dueDate) {
      return NextResponse.json(
        { error: 'Assignment is past due' },
        { status: 400 }
      )
    }

    // Get all file submissions for this assignment
    const submissions = await prisma.assignmentSubmission.findMany({
      where: {
        assignmentId,
        userId: session.user.id,
        status: 'PENDING'
      }
    })

    if (submissions.length === 0) {
      return NextResponse.json(
        { error: 'No files uploaded' },
        { status: 400 }
      )
    }

    // Update all pending submissions
    await prisma.$transaction([
      // Update submissions status
      prisma.assignmentSubmission.updateMany({
        where: {
          assignmentId,
          userId: session.user.id,
          status: 'PENDING'
        },
        data: {
          status: 'SUBMITTED',
          comments,
          submittedAt: new Date()
        }
      }),

      // Update student progress
      prisma.studentProgress.upsert({
        where: {
          userId_courseId: {
            userId: session.user.id,
            courseId
          }
        },
        update: {
          progress: {
            increment: assignment.weightage || 1
          },
          lastUpdated: new Date()
        },
        create: {
          userId: session.user.id,
          courseId,
          progress: assignment.weightage || 1,
          lastUpdated: new Date()
        }
      }),

      // Create activity record
      prisma.activity.create({
        data: {
          userId: session.user.id,
          description: `Submitted assignment: ${assignment.title}`,
          type: 'ASSIGNMENT_SUBMISSION',
          courseId
        }
      })
    ])

    // Revalidate relevant paths
    revalidatePath(`/courses/${courseId}/assignments/${assignmentId}`)
    revalidatePath(`/courses/${courseId}/progress`)

    return NextResponse.json({
      success: true,
      message: 'Assignment submitted successfully'
    })

  } catch (error) {
    console.error('Error submitting assignment:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get submission status
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
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
      },
      include: {
        assignment: {
          select: {
            title: true,
            dueDate: true,
            weightage: true
          }
        }
      }
    })

    return NextResponse.json(submissions)

  } catch (error) {
    console.error('Error fetching submission status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}