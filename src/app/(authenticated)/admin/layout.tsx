import { ReactNode } from 'react'
import { RoleGuard } from "@/components/auth/role-guard"
import { UserRole } from "@/types/roles"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard allowedRoles={[UserRole.ADMIN]}>
      <div className="container mx-auto py-6">
        {children}
      </div>
    </RoleGuard>
  )
}
