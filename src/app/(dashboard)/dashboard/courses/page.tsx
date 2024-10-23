import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'
import { CourseList } from './components/course-list'

export default async function CoursesPage() {
  const session = await getServerSession(authOptions)

  // Ejemplo de datos de cursos - reemplaza esto con tus datos reales
  const courses = [
    {
      id: '1',
      title: 'Introduction to VFX',
      description: 'Learn the basics of visual effects',
      instructor: 'John Doe',
    },
    // Añade más cursos según necesites
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <CourseList courses={courses} />
    </div>
  )
}