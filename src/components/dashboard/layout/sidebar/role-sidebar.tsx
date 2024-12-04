// src/components/dashboard/layout/sidebar/role-sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { routes } from '@/config/routes'
import { LayoutDashboard, GraduationCap, BarChart2, Calendar } from 'lucide-react'

export function RoleSidebar() {
  const pathname = usePathname()

  const sidebarItems = [
    {
      href: routes.dashboard.index,
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      href: routes.dashboard.courses,
      label: 'My Courses',
      icon: GraduationCap
    },
    {
      href: routes.dashboard.progress,
      label: 'Progress',
      icon: BarChart2
    },
    {
      href: routes.dashboard.calendar,
      label: 'Calendar',
      icon: Calendar
    }
  ]

  return (
    <nav className="space-y-1">
      {sidebarItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
            pathname === item.href
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "text-muted-foreground hover:bg-muted hover:text-primary"
          )}
        >
          <item.icon className="w-4 h-4 mr-2" />
          {item.label}
        </Link>
      ))}
    </nav>
  )
}