// src/app/api/user/career-path/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await request.json()
    const { careerPath } = body

    if (!careerPath || !['SHORT_COURSE', 'DEGREE_PROGRAM'].includes(careerPath)) {
      return new NextResponse('Invalid career path', { status: 400 })
    }

    // Update user with career path and complete onboarding
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        careerPath,
        hasCompletedOnboarding: true, // Mark onboarding as completed
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: 'COMPLETED',
              completed: true,
              responses: { careerPath }
            },
            update: {
              currentStep: 'COMPLETED',
              completed: true,
              responses: { careerPath }
            }
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        careerPath: user.careerPath,
        hasCompletedOnboarding: user.hasCompletedOnboarding
      }
    })
  } catch (error) {
    console.error('Career path selection error:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}