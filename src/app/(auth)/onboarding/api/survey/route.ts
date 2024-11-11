// src/app/(auth)/onboarding/api/survey/route.ts
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

const shortCourseSurveySchema = z.object({
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  primaryInterest: z.string(),
  timeCommitment: z.number().min(1).max(40),
  learningGoals: z.array(z.string())
})

const comprehensiveSurveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  specialization: z.array(z.string()),
  careerGoals: z.array(z.string()),
  timeCommitment: z.number(),
  preferredLearningStyle: z.array(z.string()),
  priorEducation: z.string().optional(),
  portfolioUrl: z.string().url().optional()
})

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const data = await request.json()

    // Get user's career path
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { careerPath: true }
    })

    // Validate data based on career path
    const validatedData = user?.careerPath === 'SHORT_COURSE' 
      ? shortCourseSurveySchema.parse(data)
      : comprehensiveSurveySchema.parse(data)

    // Save survey responses
    const progress = await prisma.onboardingProgress.upsert({
      where: {
        userId: session.user.id,
      },
      create: {
        userId: session.user.id,
        currentStep: 2,
        responses: validatedData
      },
      update: {
        currentStep: 2,
        responses: validatedData
      }
    })

    // Also save learning preferences
    await prisma.userPreferences.upsert({
      where: {
        userId: session.user.id,
      },
      create: {
        userId: session.user.id,
        weeklyGoal: data.timeCommitment,
        preferredTags: user?.careerPath === 'SHORT_COURSE' 
          ? [data.primaryInterest]
          : data.specialization,
      },
      update: {
        weeklyGoal: data.timeCommitment,
        preferredTags: user?.careerPath === 'SHORT_COURSE'
          ? [data.primaryInterest]
          : data.specialization,
      }
    })

    return NextResponse.json(progress)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 400 })
    }
    
    console.error('[ONBOARDING_SURVEY]', error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}