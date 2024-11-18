//src/app/api/user/recommendations/courses/route.ts
// This API route handles the recommendations for courses for students
// It is used in the onboarding process to recommend courses to students
// It is also used in the dashboard to recommend courses to students
// It is also used in the course search page to recommend courses to students

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from 'zod';

const requestSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()),
  weeklyHours: z.number(),
  timeframe: z.string(),
  primaryGoal: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = requestSchema.parse(body);

    // Mock recommendation logic - in production this would be more sophisticated
    const recommendedCourses = await prisma.course.findMany({
      where: {
        OR: validatedData.interests.map(interest => ({
          tags: {
            has: interest
          }
        }))
      },
      include: {
        instructor: {
          select: {
            name: true,
            image: true,
          }
        }
      },
      take: 5,
    });

    // Transform and enhance course data
    const enhancedCourses = recommendedCourses.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description,
      instructor: {
        name: course.instructor.name,
        avatar: course.instructor.image,
        title: 'VFX Instructor', // This would come from the database in production
      },
      duration: '6 weeks', // This would be dynamic in production
      level: validatedData.experienceLevel,
      studentsCount: Math.floor(Math.random() * 1000) + 500, // Mock data
      rating: 4 + Math.random(), // Mock data
      matchScore: Math.floor(Math.random() * 30) + 70, // Mock matching algorithm
      skills: validatedData.interests,
      thumbnail: `/api/placeholder/192/128`, // Would be real course thumbnail in production
    }));

    return NextResponse.json({ 
      courses: enhancedCourses 
    });

  } catch (error) {
    console.error('Error in course recommendations:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}