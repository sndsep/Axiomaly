// src/components/navigation/main-nav.tsx

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/forms/dropdown-menu"
import { Button } from "@/components/ui/forms/button"

export function MainNav() {
  const pathname = usePathname()
  
  const navItems = [
    {
      href: '/courses',
      label: 'Browse Courses',
      exact: true
    },
    {
      href: '/resources',
      label: 'Learning Resources',
      exact: true
    },
    {
      href: '/help',
      label: 'Help Center',
      exact: true
    }
  ]

  return (
    <div className="flex items-center gap-6">
      <nav className="flex items-center space-x-6">
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
            {item.label}
          </Link>
        ))}
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h3 className="font-semibold">Notifications</h3>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </div>
          <div className="py-2">
            {/* Placeholder para cuando no hay notificaciones */}
            <div className="px-4 py-2 text-sm text-muted-foreground">
              No new notifications
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}