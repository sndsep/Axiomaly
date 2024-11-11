"use client"

// File: src/components/dashboard/layout/dashboard-header.tsx
// Enhanced header component with role-based navigation and user settings

import { useState } from 'react'
import { UserAvatar } from '@/components/ui/avatar/user-avatar'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { 
  Settings, 
  LogOut, 
  User,
  Bell,
  Search,
  Menu,
  ChevronDown
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/forms/dropdown-menu'
import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar/avatar'

export function DashboardHeader() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const roleBasedLinks = {
    ADMIN: [
      { href: '/dashboard/admin', label: 'Admin Dashboard' },
      { href: '/dashboard/admin/users', label: 'User Management' },
      { href: '/dashboard/admin/settings', label: 'System Settings' },
    ],
    INSTRUCTOR: [
      { href: '/dashboard/instructor', label: 'Instructor Dashboard' },
      { href: '/dashboard/instructor/courses', label: 'My Courses' },
      { href: '/dashboard/instructor/students', label: 'My Students' },
    ],
    STUDENT: [
      { href: '/dashboard/courses', label: 'Browse Courses' },
      { href: '/dashboard/my-courses', label: 'My Learning' },
      { href: '/dashboard/progress', label: 'My Progress' },
    ],
  }

  const links = roleBasedLinks[session?.user?.role || 'STUDENT']

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold">VFX Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search, Notifications, and User Menu */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] md:w-[300px]"
              />
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative rounded-full p-0 hover:bg-transparent"
                aria-label="User menu"
              >
                <UserAvatar 
                  user={session?.user} 
                  size="sm"
                  loading={!session} 
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{session?.user?.name}</p>
                  <p className="text-xs text-gray-500">{session?.user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}