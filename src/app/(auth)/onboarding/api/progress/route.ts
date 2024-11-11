// src/app/(auth)/onboarding/api/progress/route.ts

// This API route handles the onboarding progress for students
// It is used to save the progress of the onboarding process  

import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const data = await request.json()
    const { step, completed, responses } = data

    // Update user's onboarding progress
    const progress = await prisma.onboardingProgress.upsert({
      where: {
        userId: session.user.id,
      },
      create: {
        userId: session.user.id,
        currentStep: step,
        completed: completed || false,
        responses: responses || {}
      },
      update: {
        currentStep: step,
        completed: completed || false,
        responses: responses ? {
          ...responses
        } : undefined
      }
    })

    return NextResponse.json(progress)
  } catch (error) {
    console.error('[ONBOARDING_PROGRESS]', error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const progress = await prisma.onboardingProgress.findUnique({
      where: {
        userId: session.user.id
      }
    })

    return NextResponse.json(progress || {
      currentStep: 1,
      completed: false,
      responses: {}
    })
  } catch (error) {
    console.error('[ONBOARDING_PROGRESS]', error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}