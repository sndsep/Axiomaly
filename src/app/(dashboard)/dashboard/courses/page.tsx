import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'
import { CourseList } from './components/course-list'
import { redirect } from 'next/navigation'
import prisma from "@/lib/db"

export default async function CoursesPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }
  // Ejemplo de datos de cursos - reemplaza esto con tus datos reales
  const courses = await prisma.course.findMany({
    include: {
      instructor: {
        select: {
          name: true
        }
      },
      students: {
        where: {
          userId: session.user.id
        }
      }
    }
  })

  console.log("Courses fetched:", courses)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <CourseList courses={courses} />
    </div>
  )
}

