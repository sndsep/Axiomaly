// src/app/api/onboarding/survey/route.ts
// This API route handles the survey data for onboarding
// It fetches the user's survey data and returns it
// It also handles errors and returns appropriate responses 

import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

// Schema validation matching your form
const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1),
  weeklyHours: z.number().min(5).max(40),
  priorExperience: z.string().min(10).max(500),
  industryFocus: z.array(z.string()).min(1),
  softwareExperience: z.array(z.string()),
  preferredLearningStyle: z.enum(['visual', 'hands-on', 'theoretical', 'mixed'])
})

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ 
        success: false, 
        error: "Not authenticated" 
      }, { 
        status: 401 
      })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        onboardingProgress: true,
      }
    })

    if (!user) {
      return NextResponse.json({ 
        success: false, 
        error: "User not found" 
      }, { 
        status: 404 
      })
    }

    // Return existing responses if any
    return NextResponse.json({
      success: true,
      data: {
        responses: user.onboardingProgress?.responses || null
      }
    })

  } catch (error) {
    console.error('Error fetching survey data:', error)
    return NextResponse.json({
      success: false,
      error: "Failed to load survey data"
    }, {
      status: 500
    })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ 
        success: false, 
        error: "Not authenticated" 
      }, { 
        status: 401 
      })
    }

    const body = await req.json()
    
    // Validate the request body
    const validationResult = surveySchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json({
        success: false,
        error: "Invalid survey data"
      }, {
        status: 400
      })
    }

    // Update user's survey responses
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        onboardingProgress: {
          upsert: {
            create: {
              currentStep: "RECOMMENDATIONS",
              responses: body,
            },
            update: {
              currentStep: "RECOMMENDATIONS",
              responses: body,
            }
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        message: "Survey responses saved successfully",
        nextRoute: '/onboarding/degree-program/curriculum'
      }
    })

  } catch (error) {
    console.error('Error saving survey data:', error)
    return NextResponse.json({
      success: false,
      error: "Failed to save survey data"
    }, {
      status: 500
    })
  }
}