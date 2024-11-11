// src/app/(authenticated)/dashboard/page.tsx
import { getOverallProgress } from '@/lib/api/progress'
import { getEnrolledCourses } from '@/lib/api/courses'
import { OverallProgressCard } from '@/components/dashboard/progress/OverallProgressCard'
import { DashboardCourses } from '@/components/dashboard/courses/DashboardCourses'
import { DashboardHeader } from '@/components/dashboard/layout/DashboardHeader'

export default async function DashboardPage() {
  const progress = await getOverallProgress()
  const courses = await getEnrolledCourses()

  return (
    <div className="space-y-6">
      <DashboardHeader
        heading="Dashboard"
        text="Bienvenido a tu panel de aprendizaje"
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <OverallProgressCard progress={progress} />
        <div className="md:col-span-2">
          {/* Aquí irían más cards de estadísticas */}
        </div>
      </div>

      <DashboardCourses 
        courses={courses} 
        showAll={false}
      />
    </div>
  )
}