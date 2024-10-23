'use client'

import { useState } from "react"
import { RoleGuard } from "@/components/auth/role-guard"
import { UserRole } from "@/types/roles"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useUsers } from "@/hooks/use-users"

export default function UsersPage() {
  return (
    <RoleGuard allowedRoles={[UserRole.ADMIN]}>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={users} />
      </div>
    </RoleGuard>
  )
}
