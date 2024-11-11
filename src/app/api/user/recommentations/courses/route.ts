//src/app/api/user/recommendations/courses/route.ts
// This API route handles the recommendations for courses for students
// It is used in the onboarding process to recommend courses to students
// It is also used in the dashboard to recommend courses to students
// It is also used in the course search page to recommend courses to students


import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { CourseRecommendationService } from '@/lib/services/courseRecommendation';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const recommendationService = new CourseRecommendationService();
    const recommendations = await recommendationService.getRecommendedCourses(
      session.user.id
    );

    return NextResponse.json({
      recommendations
    });
  } catch (error) {
    console.error('Error getting course recommendations:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to generate course recommendations' 
      }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const body = await req.json();
    const { selectedCourseIds } = body;

    if (!Array.isArray(selectedCourseIds)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid course selection' }),
        { status: 400 }
      );
    }

    const recommendationService = new CourseRecommendationService();
    await recommendationService.saveRecommendations(
      session.user.id,
      selectedCourseIds
    );

    return NextResponse.json({
      message: 'Course selections saved successfully'
    });
  } catch (error) {
    console.error('Error saving course selections:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to save course selections' 
      }),
      { status: 500 }
    );
  }
}