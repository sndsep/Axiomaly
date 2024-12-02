import CourseDashboard from '@/components/dashboard/CourseDashboard'

export default async function CoursesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      <CourseDashboard />
    </div>
  )
}