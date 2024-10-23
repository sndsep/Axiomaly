'use client'

import { useRole } from "@/hooks/useRole"
import { UserRole } from "@/types/roles"
import { ReactNode } from "react"

interface RoleGuardProps {
  children: ReactNode
  allowedRoles: UserRole[]
  fallback?: ReactNode
}

export function RoleGuard({ 
  children, 
  allowedRoles, 
  fallback = null 
}: RoleGuardProps) {
  const { role } = useRole()
  
  if (!role || !allowedRoles.includes(role)) {
    return fallback
  }

  return <>{children}</>
}

