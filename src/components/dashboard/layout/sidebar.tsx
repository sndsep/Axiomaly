'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/forms/button'

const sidebarLinks = [
  {
    href: '/dashboard',
    label: 'Home'
  },
  {
    href: '/dashboard/courses',
    label: 'Courses'
  },
  {
    href: '/dashboard/calendar',
    label: 'Calendar'
  },
  {
    href: '/dashboard/messages',
    label: 'Messages'
  },
  {
    href: '/dashboard/portfolio',
    label: 'Portfolio'
  },
  {
    href: '/dashboard/profile',
    label: 'Profile'
  }
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 min-h-screen bg-gray-100 p-4">
      <nav className="space-y-2">
        {sidebarLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={pathname === link.href ? "default" : "ghost"}
            className={`w-full justify-start flex items-center transition-colors duration-200 
              ${pathname === link.href ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}
