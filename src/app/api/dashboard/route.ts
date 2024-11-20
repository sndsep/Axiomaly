// src/app/api/dashboard/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        enrollments: {
          include: {
            course: true,
            lesson: true
          }
        },
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 5
        },
        deadlines: {
          where: {
            dueDate: {
              gte: new Date()
            }
          },
          orderBy: { dueDate: 'asc' },
          take: 5
        },
        progress: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const dashboardData = {
      courses: user.enrollments.map(enrollment => ({
        id: enrollment.courseId,
        title: enrollment.course.title,
        progress: enrollment.progress,
        currentLesson: enrollment.lesson.title
      })),
      activities: user.activities,
      deadlines: user.deadlines,
      progress: user.progress,
      stats: {
        totalCourses: user.enrollments.length,
        completedCourses: user.enrollments.filter(e => e.status === 'COMPLETED').length,
        averageProgress: user.enrollments.reduce((acc, curr) => acc + curr.progress, 0) / user.enrollments.length
      }
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error("Dashboard error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}