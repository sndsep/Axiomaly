"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/forms/button"
import { UserRole } from "@/types/roles"
import { LayoutDashboard, Users, BookOpen, Settings, Calendar } from "lucide-react" // Import icons
import { usePathname } from "next/navigation"

export function RoleSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const role = session?.user?.role

  const adminLinks = [
    { href: "/dashboard/admin/users", label: "Users", icon: Users },
    { href: "/dashboard/admin/courses", label: "Courses", icon: BookOpen },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
    { href: "/dashboard/admin/calendar", label: "Calendar", icon: Calendar },
  ]

  const instructorLinks = [
    { href: "/dashboard/instructor/courses", label: "My Courses", icon: BookOpen },
    { href: "/dashboard/instructor/students", label: "Students", icon: Users },
    { href: "/dashboard/instructor/analytics", label: "Analytics", icon: LayoutDashboard },
    { href: "/dashboard/instructor/calendar", label: "Calendar", icon: Calendar },
  ]

  const studentLinks = [
    { href: "/dashboard/courses", label: "Available Courses", icon: BookOpen },
    { href: "/dashboard/my-courses", label: "My Courses", icon: BookOpen },
    { href: "/dashboard/progress", label: "Progress", icon: LayoutDashboard },
    { href: "/dashboard/calendar", label: "Calendar", icon: Calendar },
  ]

  const links = role === UserRole.ADMIN 
    ? adminLinks 
    : role === UserRole.INSTRUCTOR 
    ? instructorLinks 
    : studentLinks

  return (
    <nav className="space-y-2">
      {links.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          className={`w-full justify-start flex items-center transition-colors duration-200 
            hover:bg-blue-100 ${pathname === link.href ? 'bg-blue-500 text-white' : ''}`}
          asChild
        >
          <Link href={link.href} className="flex items-center">
            <link.icon className="mr-2 h-4 w-4" /> {/* Icon */}
            {link.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
