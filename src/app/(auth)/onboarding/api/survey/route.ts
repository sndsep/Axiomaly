// src/app/(auth)/onboarding/api/survey/route.ts
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { z } from "zod"

const shortCourseSurveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
})

const comprehensiveSurveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  specialization: z.array(z.string()),
  careerGoals: z.array(z.string()),
  timeCommitment: z.number(),
  preferredLearningStyle: z.array(z.string()),
  priorEducation: z.string().optional(),
  portfolioUrl: z.string().url().optional(),
})

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const data = await request.json()

    // Determine the user's career path
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { careerPath: true },
    })

    // Validate data based on career path
    const validatedData = user?.careerPath === 'SHORT_COURSE' 
      ? shortCourseSurveySchema.parse(data)
      : comprehensiveSurveySchema.parse(data)

    // Save survey responses
    await prisma.onboardingProgress.upsert({
      where: {
        userId: session.user.id,
      },
      create: {
        userId: session.user.id,
        currentStep: 2,
        responses: validatedData,
      },
      update: {
        currentStep: 2,
        responses: validatedData,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing survey:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}