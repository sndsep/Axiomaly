// src/app/(dashboard)/dashboard/page.tsx
import { Suspense } from "react"
import { StatCard } from "./components/StatCard"
import { CourseList } from "./components/CourseList"
import { ProgressChart } from "./components/ProgressChart"
import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

async function getStats(userId: string) {
  return await prisma.$transaction(async (tx) => {
    const totalCourses = await tx.course.count()
    const inProgress = await tx.progress.count({
      where: {
        userId,
        completed: false,
      },
    })
    const completed = await tx.progress.count({
      where: {
        userId,
        completed: true,
      },
    })
    const resources = await tx.resource.count()

    const courses = await tx.course.findMany({
      include: {
        progress: {
          where: {
            userId
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return {
      totalCourses,
      inProgress,
      completed,
      resources,
      courses
    }
  })
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    redirect('/login')
  }

  const stats = await getStats(session.user.id)

  return (
    <div className="space-y-6 p-6 pb-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Bienvenido, {session.user.name}
        </h1>
        <p className="text-muted-foreground">
          Aquí está un resumen de tu progreso y cursos activos.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Cursos Disponibles" 
          value={stats.totalCourses.toString()} 
          icon="BookOpen" 
        />
        <StatCard 
          title="En Progreso" 
          value={stats.inProgress.toString()} 
          icon="Clock" 
        />
        <StatCard 
          title="Completados" 
          value={stats.completed.toString()} 
          icon="CheckCircle" 
        />
        <StatCard 
          title="Recursos" 
          value={stats.resources.toString()} 
          icon="FileText" 
        />
      </div>

      {/* Progress Chart */}
      <div className="grid gap-6 md:grid-cols-2">
        <Suspense fallback={<div>Cargando gráfico...</div>}>
          <ProgressChart />
        </Suspense>

        {/* Course List */}
        <div className="rounded-lg border">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Tus Cursos</h2>
            <Suspense fallback={<div>Cargando cursos...</div>}>
              <CourseList initialCourses={stats.courses} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}