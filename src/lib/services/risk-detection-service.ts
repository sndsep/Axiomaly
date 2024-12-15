// src/lib/services/risk-detection-service.ts
import { prisma } from '@/lib/prisma';
import { addDays, differenceInDays } from 'date-fns';
import { getWebSocketServer } from '@/lib/websocket/server';

interface RiskFactors {
  inactivityDays: number;
  lowCompletionRate: boolean;
  missedDeadlines: number;
  lowEngagementScore: boolean;
}

interface StudentRiskStatus {
  userId: string;
  courseId: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  riskFactors: RiskFactors;
  lastNotified?: Date;
}

export class RiskDetectionService {
  static async analyzeStudentRisk(courseId: string, userId: string): Promise<StudentRiskStatus> {
    const [
      enrollment,
      lastActivity,
      deadlines,
      engagementScore
    ] = await Promise.all([
      // Get enrollment and progress
      prisma.enrollment.findUnique({
        where: {
          userId_courseId: { userId, courseId }
        },
        include: {
          lessonProgress: true,
          course: {
            include: {
              lessons: true
            }
          }
        }
      }),

      // Get last activity
      prisma.activityLog.findFirst({
        where: {
          userId,
          courseId
        },
        orderBy: {
          timestamp: 'desc'
        }
      }),

      // Get missed deadlines
      prisma.deadline.findMany({
        where: {
          userId,
          courseId,
          dueDate: {
            lt: new Date()
          }
        }
      }),

      // Get engagement score
      prisma.studentProgress.findUnique({
        where: {
          userId_courseId: { userId, courseId }
        }
      })
    ]);

    if (!enrollment) {
      throw new Error('Enrollment not found');
    }

    // Calculate risk factors
    const riskFactors: RiskFactors = {
      inactivityDays: lastActivity 
        ? differenceInDays(new Date(), lastActivity.timestamp)
        : differenceInDays(new Date(), enrollment.enrolledAt),
      lowCompletionRate: (enrollment.lessonProgress.filter(p => p.completed).length / 
        enrollment.course.lessons.length) < 0.3,
      missedDeadlines: deadlines.length,
      lowEngagementScore: (engagementScore?.progress || 0) < 30
    };

    // Calculate overall risk level
    const riskLevel = this.calculateRiskLevel(riskFactors);

    const riskStatus: StudentRiskStatus = {
      userId,
      courseId,
      riskLevel,
      riskFactors,
      lastNotified: await this.getLastNotificationDate(userId, courseId)
    };

    return riskStatus;
  }

  static async processRiskNotifications(courseId: string): Promise<void> {
    // Get all enrollments for the course
    const enrollments = await prisma.enrollment.findMany({
      where: { courseId },
      select: { userId: true }
    });

    // Analyze risk for each student
    const riskAnalyses = await Promise.all(
      enrollments.map(e => this.analyzeStudentRisk(courseId, e.userId))
    );

    // Filter students needing notification
    const studentsToNotify = riskAnalyses.filter(analysis => {
      const shouldNotify = 
        analysis.riskLevel !== 'LOW' && 
        (!analysis.lastNotified || 
         differenceInDays(new Date(), analysis.lastNotified) >= 7);
      return shouldNotify;
    });

    // Send notifications
    await Promise.all(
      studentsToNotify.map(async (student) => {
        const notificationData = await this.createRiskNotification(student);
        await this.sendRiskNotifications(notificationData);
      })
    );
  }

  private static async createRiskNotification(riskStatus: StudentRiskStatus) {
    const user = await prisma.user.findUnique({
      where: { id: riskStatus.userId },
      select: { name: true, email: true }
    });

    const course = await prisma.course.findUnique({
      where: { id: riskStatus.courseId },
      select: { title: true, instructorId: true }
    });

    const notificationContent = this.generateNotificationContent(riskStatus, user?.name, course?.title);

    return {
      student: {
        id: riskStatus.userId,
        name: user?.name,
        email: user?.email
      },
      course: {
        id: riskStatus.courseId,
        title: course?.title,
        instructorId: course?.instructorId
      },
      risk: riskStatus,
      content: notificationContent
    };
  }

  private static async sendRiskNotifications(notificationData: any) {
    const ws = getWebSocketServer();
    const { student, course, risk, content } = notificationData;

    // Create notification records
    await prisma.$transaction([
      // Student notification
      prisma.notification.create({
        data: {
          userId: student.id,
          type: 'RISK_WARNING',
          title: 'Course Progress Alert',
          message: content.student,
          metadata: { courseId: course.id, riskLevel: risk.riskLevel }
        }
      }),

      // Instructor notification
      prisma.notification.create({
        data: {
          userId: course.instructorId,
          type: 'STUDENT_AT_RISK',
          title: 'Student Risk Alert',
          message: content.instructor,
          metadata: { 
            courseId: course.id, 
            studentId: student.id,
            riskLevel: risk.riskLevel,
            riskFactors: risk.riskFactors
          }
        }
      }),

      // Update last notification date
      prisma.studentProgress.update({
        where: {
          userId_courseId: {
            userId: student.id,
            courseId: course.id
          }
        },
        data: {
          lastRiskNotification: new Date()
        }
      })
    ]);

    // Send real-time notifications
    ws.sendNotification(student.id, {
      type: 'RISK_WARNING',
      title: 'Course Progress Alert',
      message: content.student
    });

    ws.sendNotification(course.instructorId, {
      type: 'STUDENT_AT_RISK',
      title: 'Student Risk Alert',
      message: content.instructor
    });
  }

  private static calculateRiskLevel(factors: RiskFactors): 'LOW' | 'MEDIUM' | 'HIGH' {
    let riskScore = 0;

    if (factors.inactivityDays > 14) riskScore += 3;
    else if (factors.inactivityDays > 7) riskScore += 2;
    
    if (factors.lowCompletionRate) riskScore += 2;
    if (factors.missedDeadlines > 2) riskScore += 3;
    else if (factors.missedDeadlines > 0) riskScore += 1;
    if (factors.lowEngagementScore) riskScore += 2;

    if (riskScore >= 6) return 'HIGH';
    if (riskScore >= 3) return 'MEDIUM';
    return 'LOW';
  }

  private static async getLastNotificationDate(userId: string, courseId: string): Promise<Date | undefined> {
    const progress = await prisma.studentProgress.findUnique({
      where: {
        userId_courseId: { userId, courseId }
      },
      select: {
        lastRiskNotification: true
      }
    });

    return progress?.lastRiskNotification;
  }

  private static generateNotificationContent(
    risk: StudentRiskStatus,
    studentName?: string,
    courseTitle?: string
  ) {
    const factors = [];
    if (risk.riskFactors.inactivityDays > 7) {
      factors.push(`${risk.riskFactors.inactivityDays} days of inactivity`);
    }
    if (risk.riskFactors.lowCompletionRate) {
      factors.push('low completion rate');
    }
    if (risk.riskFactors.missedDeadlines > 0) {
      factors.push(`${risk.riskFactors.missedDeadlines} missed deadlines`);
    }
    if (risk.riskFactors.lowEngagementScore) {
      factors.push('low engagement');
    }

    return {
      student: `Your progress in ${courseTitle} needs attention due to: ${factors.join(', ')}. Let's work together to get back on track!`,
      instructor: `${studentName} is at ${risk.riskLevel} risk in ${courseTitle} due to: ${factors.join(', ')}. Consider reaching out to provide support.`
    };
  }
}