// src/app/(authenticated)/dashboard/calendar/page.tsx
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Calendar } from "@/components/dashboard/calendar/Calendar"
import type { CalendarEvent } from "@/types/calendar"

async function getCalendarEvents(userId: string): Promise<CalendarEvent[]> {
  if (!userId) throw new Error("User ID is required");

  try {
    // Get user's course enrollments with assignments and live sessions
    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: userId,
        status: 'ACTIVE'
      },
      include: {
        course: {
          include: {
            assignments: true,
            liveSessions: true
          }
        }
      }
    });

    let events: CalendarEvent[] = [];

    // Process assignments
    enrollments.forEach(enrollment => {
      enrollment.course.assignments?.forEach(assignment => {
        if (assignment.dueDate) {
          events.push({
            id: `assignment-${assignment.id}`,
            title: assignment.title,
            description: `Due: ${assignment.title} - ${enrollment.course.title}`,
            date: assignment.dueDate,
            type: 'assignment' as const,
            courseId: enrollment.courseId
          });
        }
      });

      // Process live sessions
      enrollment.course.liveSessions?.forEach(session => {
        events.push({
          id: `session-${session.id}`,
          title: session.title,
          description: `Live: ${session.title} - ${enrollment.course.title}`,
          date: session.startTime,
          type: 'live-session' as const,
          courseId: enrollment.courseId
        });
      });
    });

    // Sort events by date
    return events.sort((a, b) => a.date.getTime() - b.date.getTime());
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
}

export default async function CalendarPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const events = await getCalendarEvents(session.user.id);

  return (
    <div className="container mx-auto p-6">
      <Calendar events={events} />
    </div>
  );
}