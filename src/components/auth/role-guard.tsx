// src/components/auth/role-guard.tsx
'use client'

import { useUser } from '@/contexts/user-context'
import type { UserRole } from '@/types/roles'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function RoleGuard({
  children,
  allowedRoles,
  fallbackUrl = '/login'
}: {
  children: React.ReactNode
  allowedRoles: UserRole[]
  fallbackUrl?: string
}) {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      router.push(fallbackUrl)
    }
  }, [user, allowedRoles, fallbackUrl, router])

  if (!user || !allowedRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}