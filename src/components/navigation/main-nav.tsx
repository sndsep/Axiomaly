'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useRole } from '@/hooks/useRole'

export function MainNav() {
  const pathname = usePathname()
  const { isAdmin, isInstructor } = useRole()

  const navItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'My Courses',
      href: '/dashboard/courses',
    },
    {
      title: 'Resources',
      href: '/dashboard/resources',
    },
    ...(isInstructor || isAdmin ? [
      {
        title: 'Create Course',
        href: '/instructor/courses/create',
      },
      {
        title: 'Manage Courses',
        href: '/instructor/courses',
      },
    ] : []),
    ...(isAdmin ? [
      {
        title: 'Admin Panel',
        href: '/admin',
      },
      {
        title: 'Users',
        href: '/admin/users',
      },
    ] : []),
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
