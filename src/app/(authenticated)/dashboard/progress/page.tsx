// src/app/(authenticated)/dashboard/progress/page.tsx
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { ProgressDashboard } from "@/components/dashboard/progress/ProgressDashboard"
import type { CourseProgress, OverallProgress } from "@/types/progress"

async function getProgressData(userId: string): Promise<{
  coursesProgress: CourseProgress[],
  overallProgress: OverallProgress
}> {
  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: userId,
        NOT: {
          status: 'DROPPED'
        }
      },
      include: {
        course: true,
        lessonProgress: true,
        lessons: {
          take: 1,
          orderBy: {
            order: 'asc' // Using 'order' field instead of 'createdAt'
          }
        }
      }
    });

    const coursesProgress: CourseProgress[] = enrollments.map(enrollment => {
      const currentLesson = enrollment.lessons[0];
      
      return {
        courseId: enrollment.courseId,
        status: enrollment.progress === 0 
          ? 'not-started' 
          : enrollment.progress === 100 
            ? 'completed' 
            : 'in-progress',
        percentage: enrollment.progress,
        lastUpdated: enrollment.updatedAt,
        currentLessonId: currentLesson?.id,
        nextLessonId: undefined, // Will need separate query to get next lesson
        completedLessons: enrollment.lessonProgress?.length || 0,
        totalLessons: enrollment.course.totalLessons || 0
      };
    });

    const overallProgress: OverallProgress = {
      completedCredits: enrollments.reduce((acc, curr) => 
        curr.status === 'COMPLETED' ? acc + (curr.course.credits || 0) : acc, 0),
      totalCredits: enrollments.reduce((acc, curr) => 
        acc + (curr.course.credits || 0), 0),
      completedCourses: enrollments.filter(e => e.status === 'COMPLETED').length,
      totalCourses: enrollments.length,
      averageProgress: enrollments.length 
        ? enrollments.reduce((acc, curr) => acc + (curr.progress || 0), 0) / enrollments.length 
        : 0
    };

    return {
      coursesProgress,
      overallProgress
    };

  } catch (error) {
    console.error('Error fetching progress data:', error);
    throw error;
  }
}

export default async function ProgressPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const { coursesProgress, overallProgress } = await getProgressData(session.user.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProgressDashboard 
        coursesProgress={coursesProgress} 
        overallProgress={overallProgress}
      />
    </div>
  );
}