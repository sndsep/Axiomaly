import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/db/db"; // Asegúrate de que la ruta sea correcta
import { redirect } from "next/navigation"
import { CourseList } from "./components/CourseList"
import { ProgressChart } from "./components/ProgressChart"
import { StatCard } from "./components/StatCard"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session || !session.user) {
    redirect("/login")
  }

  const userId = session.user.id

  const [
    courseCount,
    enrollmentCount,
    completedLessonsCount,
    courses
  ] = await Promise.all([
    prisma.course.count(),
    prisma.enrollment.count({
      where: {
        userId: userId,
      },
    }),
    prisma.lesson.count({
      where: {
        enrollments: {
          some: {
            userId: userId,
            completed: true,
          }
        }
      },
    }),
    prisma.course.findMany({
      where: {
        enrollments: {
          some: {
            userId: userId,
          },
        },
      },
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
    }),
  ])

  // Asegúrate de que prisma esté correctamente inicializado
  const lessonCount = await prisma.lesson.count({
    where: {
      enrollments: {
        some: {
          userId: userId,
          completed: true,
        }
      }
    }
  });
  console.log('Total Lessons:', lessonCount);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {session.user.name}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Courses"
          value={courseCount.toString()}
          icon="BookOpen"
        />
        <StatCard
          title="Enrolled Courses"
          value={enrollmentCount.toString()}
          icon="CheckCircle"
        />
        <StatCard
          title="Completed Lessons"
          value={completedLessonsCount.toString()}
          icon="Clock"
        />
        <StatCard
          title="Downloaded Resources"
          value="12"
          icon="FileText"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressChart />
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            {courses.length > 0 ? (
              <ul className="space-y-4">
                {courses.map((course) => (
                  <li key={course.id} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm">{course.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(course.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No recent activity</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
