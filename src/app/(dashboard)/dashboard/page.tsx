import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-config"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { CourseList } from "./components/CourseList"
import { ProgressChart } from "./components/ProgressChart"
import { StatCard } from "./components/StatCard"

async function getDashboardData(userId: string) {
  const [
    coursesCount,
    completedCoursesCount,
    totalTimeSpent,
    recentActivity,
    courses
  ] = await Promise.all([
    prisma.course.count(),
    prisma.enrollment.count({
      where: {
        userId,
        status: "COMPLETED"
      }
    }),
    prisma.studentProgress.aggregate({
      where: { userId },
      _sum: { progress: true }
    }),
    prisma.activity.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5
    }),
    prisma.course.findMany({
      include: {
        instructor: {
          select: { name: true }
        },
        enrollments: {
          where: { userId }
        }
      },
      take: 6
    })
  ])

  return {
    coursesCount,
    completedCoursesCount,
    totalTimeSpent: totalTimeSpent._sum.progress || 0,
    recentActivity,
    courses: courses.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description || '',
      thumbnail: '/images/course-placeholder.jpg', // Actualizada la ruta
      progress: course.enrollments[0]?.status === 'COMPLETED' 
        ? { completed: true }
        : { completed: false }
    }))
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/login')
  }

  const data = await getDashboardData(session.user.id)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Bienvenido de nuevo, {session.user.name}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Cursos Totales"
          value={data.coursesCount.toString()}
          icon="BookOpen"
        />
        <StatCard
          title="Cursos Completados"
          value={data.completedCoursesCount.toString()}
          icon="CheckCircle"
        />
        <StatCard
          title="Horas de Estudio"
          value={`${Math.round(data.totalTimeSpent / 60)}h`}
          icon="Clock"
        />
        <StatCard
          title="Recursos Descargados"
          value="12"
          icon="FileText"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressChart />
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
            {data.recentActivity.length > 0 ? (
              <ul className="space-y-4">
                {data.recentActivity.map((activity) => (
                  <li key={activity.id} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No hay actividad reciente</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Tus Cursos</h2>
        <CourseList initialCourses={data.courses} />
      </div>
    </div>
  )
}
