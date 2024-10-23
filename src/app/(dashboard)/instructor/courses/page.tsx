import { RoleGuard } from "@/components/auth/role-guard"
import { UserRole } from "@/types/roles"
import { redirect } from "next/navigation"

export default function InstructorCoursesPage() {
  return (
    <RoleGuard 
      allowedRoles={[UserRole.INSTRUCTOR, UserRole.ADMIN]}
      fallback={redirect("/dashboard")}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Manage Your Courses</h1>
        {/* Instructor course management content */}
      </div>
    </RoleGuard>
  )
}

