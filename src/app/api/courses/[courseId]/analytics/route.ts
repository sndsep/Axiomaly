// src/app/api/courses/[courseId]/analytics/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Verify instructor has access to this course
    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      select: { instructorId: true }
    });

    if (!course || course.instructorId !== session.user.id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Get course analytics in parallel
    const [
      enrollments,
      lessonStats,
      studentProgress
    ] = await Promise.all([
      // Get enrollments with student info
      prisma.enrollment.findMany({
        where: { courseId: params.courseId },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          lessonProgress: {
            include: {
              lesson: true
            }
          }
        }
      }),

      // Get lesson completion stats
      prisma.lesson.findMany({
        where: { courseId: params.courseId },
        include: {
          _count: {
            select: {
              progress: {
                where: { completed: true }
              }
            }
          }
        }
      }),

      // Get overall progress stats
      prisma.studentProgress.findMany({
        where: { courseId: params.courseId }
      })
    ]);

    // Calculate course stats
    const totalStudents = enrollments.length;
    const completedCount = enrollments.filter(e => e.status === 'COMPLETED').length;
    const completionRate = totalStudents > 0 
      ? (completedCount / totalStudents) * 100 
      : 0;
    const averageProgress = totalStudents > 0
      ? studentProgress.reduce((acc, curr) => acc + curr.progress, 0) / totalStudents
      : 0;

    // Process student data
    const students = enrollments.map(enrollment => {
      const completedLessons = enrollment.lessonProgress.filter(p => p.completed).length;
      const totalLessons = lessonStats.length;
      
      return {
        id: enrollment.user.id,
        name: enrollment.user.name,
        email: enrollment.user.email,
        progress: (completedLessons / totalLessons) * 100,
        completedLessons,
        totalLessons,
        lastAccessed: enrollment.updatedAt
      };
    });

    // Process lesson stats
    const processedLessonStats = lessonStats.map(lesson => ({
      id: lesson.id,
      title: lesson.title,
      completions: lesson._count.progress,
      completionRate: (lesson._count.progress / totalStudents) * 100,
      averageTime: 0, // TODO: Implement time tracking
    }));

    const analyticsData = {
      courseStats: {
        totalStudents,
        completedCount,
        completionRate,
        averageProgress
      },
      students,
      lessonStats: processedLessonStats
    };

    return NextResponse.json(analyticsData);

  } catch (error) {
    console.error('[COURSE_ANALYTICS]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}