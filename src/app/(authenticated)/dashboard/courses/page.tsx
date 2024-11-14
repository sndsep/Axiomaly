import { CourseDashboard } from '@/components/dashboard/courses/course-dashboard';

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <CourseDashboard />
    </div>
  );
}
