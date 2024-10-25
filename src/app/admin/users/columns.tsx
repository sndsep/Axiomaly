"use client"

import { ColumnDef } from "@tanstack/react-table"
import { UserRole } from "@/types/roles"
import { RoleSelector } from "./role-selector"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const user = row.original
      return (
        <RoleSelector 
          userId={user.id}
          currentRole={user.role}
        />
      )
    },
  },
]
