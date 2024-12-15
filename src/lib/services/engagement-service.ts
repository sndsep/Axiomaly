// src/lib/services/engagement-service.ts

import { prisma } from '@/lib/prisma';
import { addDays, startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';

interface EngagementMetrics {
  totalEngagementScore: number;
  averageEngagementScore: number;
  activeStudents: number;
  totalActivities: number;
  studentsEngagement: {
    userId: string;
    name: string;
    score: number;
    activities: number;
    lastActive: Date;
  }[];
  dailyEngagement: {
    date: string;
    activeUsers: number;
    activities: number;
    averageScore: number;
  }[];
  riskStudents: {
    userId: string;
    name: string;
    daysInactive: number;
    completionRate: number;
  }[];
}

export class EngagementService {
  static async getEngagementMetrics(courseId: string, days: number = 30): Promise<EngagementMetrics> {
    const startDate = startOfDay(addDays(new Date(), -days));
    const endDate = endOfDay(new Date());

    // Get base engagement data
    const rawData = await this.calculateEngagementData(courseId, startDate, endDate);

    // Process daily engagement
    const dailyEngagement = eachDayOfInterval({ start: startDate, end: endDate })
      .map(date => {
        const dayStart = startOfDay(date);
        const dayEnd = endOfDay(date);
        const dayActivities = rawData.activities.filter(
          a => a.timestamp >= dayStart && a.timestamp <= dayEnd
        );

        return {
          date: date.toISOString().split('T')[0],
          activeUsers: new Set(dayActivities.map(a => a.userId)).size,
          activities: dayActivities.length,
          averageScore: dayActivities.reduce((acc, curr) => acc + curr.score, 0) / dayActivities.length || 0
        };
      });

    // Calculate risk students
    const riskStudents = rawData.students
      .filter(student => {
        const lastActivity = rawData.activities
          .filter(a => a.userId === student.id)
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];
        
        const daysInactive = lastActivity 
          ? Math.floor((new Date().getTime() - lastActivity.timestamp.getTime()) / (1000 * 60 * 60 * 24))
          : days;

        const completionRate = (student.completedLessons / student.totalLessons) * 100;

        return daysInactive > 7 || completionRate < 30;
      })
      .map(student => {
        const lastActivity = rawData.activities
          .filter(a => a.userId === student.id)
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];

        return {
          userId: student.id,
          name: student.name,
          daysInactive: lastActivity 
            ? Math.floor((new Date().getTime() - lastActivity.timestamp.getTime()) / (1000 * 60 * 60 * 24))
            : days,
          completionRate: (student.completedLessons / student.totalLessons) * 100
        };
      });

    // Calculate aggregated metrics
    const totalEngagementScore = rawData.activities.reduce((acc, curr) => acc + curr.score, 0);
    const averageEngagementScore = totalEngagementScore / rawData.students.length || 0;
    const activeStudents = new Set(rawData.activities.map(a => a.userId)).size;

    return {
      totalEngagementScore,
      averageEngagementScore,
      activeStudents,
      totalActivities: rawData.activities.length,
      studentsEngagement: rawData.students.map(student => ({
        userId: student.id,
        name: student.name,
        score: rawData.activities
          .filter(a => a.userId === student.id)
          .reduce((acc, curr) => acc + curr.score, 0),
        activities: rawData.activities.filter(a => a.userId === student.id).length,
        lastActive: rawData.activities
          .filter(a => a.userId === student.id)
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0]?.timestamp || startDate
      })),
      dailyEngagement,
      riskStudents
    };
  }

  private static async calculateEngagementData(courseId: string, startDate: Date, endDate: Date) {
    const [students, activities] = await Promise.all([
      // Get all enrolled students
      prisma.enrollment.findMany({
        where: { courseId },
        select: {
          user: {
            select: {
              id: true,
              name: true
            }
          },
          lessonProgress: {
            select: {
              completed: true
            }
          },
          course: {
            select: {
              lessons: {
                select: { id: true }
              }
            }
          }
        }
      }),

      // Get all engagement activities
      prisma.activityLog.findMany({
        where: {
          courseId,
          timestamp: {
            gte: startDate,
            lte: endDate
          }
        },
        select: {
          userId: true,
          type: true,
          score: true,
          timestamp: true
        }
      })
    ]);

    return {
      students: students.map(enrollment => ({
        id: enrollment.user.id,
        name: enrollment.user.name,
        completedLessons: enrollment.lessonProgress.filter(p => p.completed).length,
        totalLessons: enrollment.course.lessons.length
      })),
      activities
    };
  }

  static getEngagementScore(
    completedLessons: number,
    discussionPosts: number,
    submissionCount: number,
    timeSpentMinutes: number
  ): number {
    const lessonScore = completedLessons * 10;
    const discussionScore = discussionPosts * 5;
    const submissionScore = submissionCount * 15;
    const timeScore = Math.min(timeSpentMinutes / 10, 50); // Cap time score at 50

    return lessonScore + discussionScore + submissionScore + timeScore;
  }
}