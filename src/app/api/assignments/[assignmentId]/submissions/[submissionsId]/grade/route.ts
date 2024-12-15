// src/app/api/assignments/[assignmentId]/submissions/[submissionId]/grade/route.ts
import { NextResponse } from 'next/response'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function POST(
  req: Request,
  { params }: { params: { assignmentId: string; submissionId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Verify instructor permissions
    const course = await prisma.course.findFirst({
      where: {
        assignments: {
          some: {
            id: params.assignmentId
          }
        },
        instructorId: session.user.id
      }
    })

    if (!course) {
      return NextResponse.json(
        { error: 'Unauthorized - Not the course instructor' },
        { status: 403 }
      )
    }

    const body = await req.json()
    const { grade, feedback } = body

    if (typeof grade !== 'number' || grade < 0 || grade > 100) {
      return NextResponse.json(
        { error: 'Invalid grade value' },
        { status: 400 }
      )
    }

    // Update submission with grade and feedback
    const submission = await prisma.assignmentSubmission.update({
      where: {
        id: params.submissionId,
        assignmentId: params.assignmentId
      },
      data: {
        grade,
        feedback,
        status: 'GRADED',
        gradedAt: new Date(),
        gradedById: session.user.id
      },
      include: {
        user: true,
        assignment: {
          include: {
            course: true
          }
        }
      }
    })

    // Create notification for student
    await prisma.notification.create({
      data: {
        userId: submission.userId,
        title: 'Assignment Graded',
        message: `Your submission for ${submission.assignment.title} has been graded`,
        type: 'GRADE',
        courseId: course.id,
        assignmentId: params.assignmentId,
        data: {
          grade,
          courseName: submission.assignment.course.title
        }
      }
    })

    // Update student progress
    await prisma.studentProgress.updateMany({
      where: {
        userId: submission.userId,
        courseId: course.id
      },
      data: {
        lastGradedAt: new Date(),
        totalGradedAssignments: {
          increment: 1
        }
      }
    })

    // Create activity log
    await prisma.activity.create({
      data: {
        userId: session.user.id,
        description: `Graded submission for ${submission.assignment.title}`,
        type: 'ASSIGNMENT_GRADING',
        courseId: course.id,
        relatedUserId: submission.userId
      }
    })

    // Revalidate relevant paths
    revalidatePath(`/courses/${course.id}/assignments/${params.assignmentId}`)
    revalidatePath(`/courses/${course.id}/grades`)
    revalidatePath(`/dashboard`)

    return NextResponse.json({
      success: true,
      submission
    })

  } catch (error) {
    console.error('Error grading submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get grading details
export async function GET(
  req: Request,
  { params }: { params: { assignmentId: string; submissionId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const submission = await prisma.assignmentSubmission.findUnique({
      where: {
        id: params.submissionId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        gradedBy: {
          select: {
            id: true,
            name: true
          }
        },
        assignment: {
          include: {
            course: {
              select: {
                id: true,
                title: true,
                instructorId: true
              }
            }
          }
        }
      }
    })

    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }

    // Check permissions
    const isInstructor = submission.assignment.course.instructorId === session.user.id
    const isStudent = submission.userId === session.user.id

    if (!isInstructor && !isStudent) {
      return NextResponse.json(
        { error: 'Unauthorized to view this submission' },
        { status: 403 }
      )
    }

    return NextResponse.json(submission)

  } catch (error) {
    console.error('Error fetching grading details:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}