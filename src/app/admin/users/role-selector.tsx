"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UserRole } from "@/types/roles"
import { toast } from "@/components/ui/use-toast"

interface RoleSelectorProps {
  userId: string
  currentRole: UserRole
}

export function RoleSelector({ userId, currentRole }: RoleSelectorProps) {
  const [role, setRole] = useState(currentRole)
  const [isLoading, setIsLoading] = useState(false)

  const onRoleChange = async (newRole: UserRole) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/admin/users/update-role', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          role: newRole,
        }),
      })

      if (!response.ok) throw new Error('Failed to update role')

      setRole(newRole)
      toast({
        title: "Role Updated",
        description: "User role has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user role.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Select
      value={role}
      onValueChange={onRoleChange}
      disabled={isLoading}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select role" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(UserRole).map((role) => (
          <SelectItem key={role} value={role}>
            {role}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
