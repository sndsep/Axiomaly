// src/app/api/onboarding/recommendations/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user preferences and survey responses
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        surveyResponse: true,
        onboardingProgress: true,
        preferences: true
      }
    });

    if (!user?.surveyResponse) {
      return NextResponse.json({ error: "Survey not completed" }, { status: 400 });
    }

    // Calculate course recommendations
    const recommendations = await prisma.course.findMany({
      where: {
        AND: [
          { 
            difficultyLevel: user.surveyResponse.experienceLevel 
          },
          {
            OR: user.surveyResponse.interests.map(interest => ({
              category: {
                name: interest
              }
            }))
          }
        ]
      },
      include: {
        instructor: {
          select: {
            name: true,
            image: true
          }
        },
        category: true,
        resources: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      },
      orderBy: [
        { 
          category: {
            name: 'asc'
          }
        },
        {
          createdAt: 'desc'
        }
      ],
      take: 10
    });

    // Update onboarding progress
    await prisma.onboardingProgress.update({
      where: { userId: session.user.id },
      data: {
        responses: {
          ...user.onboardingProgress?.responses,
          recommendationsViewed: true,
          recommendationsViewedAt: new Date().toISOString()
        }
      }
    });

    return NextResponse.json({
      recommendations,
      preferences: {
        experienceLevel: user.surveyResponse.experienceLevel,
        interests: user.surveyResponse.interests,
        weeklyHours: user.surveyResponse.weeklyHours
      },
      nextStep: '/onboarding/course-selection'
    });

  } catch (error) {
    console.error("Error getting recommendations:", error);
    return NextResponse.json(
      { error: "Failed to get recommendations" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { selectedCourseIds } = await req.json();

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        onboardingProgress: {
          update: {
            currentStep: 'COURSE_SELECTION',
            responses: {
              selectedCourses: selectedCourseIds,
              coursesSelectedAt: new Date().toISOString()
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return NextResponse.json({
      success: true,
      nextStep: '/onboarding/course-selection',
      progress: user.onboardingProgress
    });

  } catch (error) {
    console.error("Error saving course selection:", error);
    return NextResponse.json(
      { error: "Failed to save course selection" },
      { status: 500 }
    );
  }
}