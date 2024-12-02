// src/app/api/onboarding/career-path/route.ts
// This API route handles the selection of a career path for onboarding
// It updates the user's career path and onboarding progress
// It returns the updated career path
// It also handles errors and returns appropriate responses for errors

import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ 
        success: false,
        error: "Not authenticated" 
      }, { 
        status: 401 
      })
    }

    // Parse request body
    const body = await req.json()
    const type = body.type
    
    // Validate type
    if (!type || !['SHORT_COURSE', 'DEGREE_PROGRAM'].includes(type)) {
      return NextResponse.json({ 
        success: false,
        error: "Invalid career path type" 
      }, { 
        status: 400 
      })
    }

    // Update user career path
    await prisma.user.update({
      where: { 
        email: session.user.email 
      },
      data: {
        careerPath: type,
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: "SURVEY",
              completed: false,
              responses: {}
            },
            update: {
              currentStep: "SURVEY"
            }
          }
        }
      }
    })

    // Actualizar la sesión con los nuevos datos
    session.user = {
      ...session.user,
      careerPath: type,
      onboardingProgress: {
        ...session.user.onboardingProgress,
        currentStep: "SURVEY"
      }
    }

    // Define next route based on type
    const nextRoute = type === 'SHORT_COURSE' 
      ? '/onboarding/short-course/survey'
      : '/onboarding/degree-program/survey'

    return NextResponse.json({
      success: true,
      data: {
        careerPath: type,
        nextRoute
      }
    })

  } catch (error) {
    console.error("Career path selection error:", error)
    
    return NextResponse.json({
      success: false,
      error: "Failed to save career path"
    }, {
      status: 500
    })
  }
}