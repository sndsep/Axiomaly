// app/api/progress/route.ts
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import type { CourseProgress, OverallProgress } from "@/types/progress"

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        course: true,
        lesson: true,
      }
    });

    const coursesProgress: CourseProgress[] = enrollments.map(enrollment => ({
      courseId: enrollment.courseId,
      status: enrollment.progress === 0 
        ? 'not-started' 
        : enrollment.progress === 100 
          ? 'completed' 
          : 'in-progress',
      percentage: enrollment.progress,
      lastUpdated: enrollment.updatedAt,
      currentLessonId: enrollment.lessonId,
      nextLessonId: undefined, // Calculate based on course structure
      completedLessons: Math.floor((enrollment.progress / 100) * enrollment.course.totalLessons),
      totalLessons: enrollment.course.totalLessons
    }));

    const overallProgress: OverallProgress = {
      completedCredits: enrollments.reduce((acc, curr) => 
        curr.status === 'COMPLETED' ? acc + curr.course.credits : acc, 0),
      totalCredits: enrollments.reduce((acc, curr) => acc + curr.course.credits, 0),
      completedCourses: enrollments.filter(e => e.status === 'COMPLETED').length,
      totalCourses: enrollments.length,
      averageProgress: enrollments.reduce((acc, curr) => acc + curr.progress, 0) / enrollments.length
    };

    return NextResponse.json({
      coursesProgress,
      overallProgress
    });
    
  } catch (error) {
    console.error('[PROGRESS_GET]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}