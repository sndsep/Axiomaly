'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/forms/button"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'Courses',
      href: '/dashboard/courses',
    },
    {
      title: 'Calendar',
      href: '/dashboard/calendar',
    }
  ]

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={32} 
            height={32} 
          />
          <span className="font-bold text-xl">VFX Academy</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
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
      </div>
      <UserNav />
    </div>
  )
}

export function UserNav() {
  const { data: session } = useSession()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {/* Resto del menú... */}
    </DropdownMenu>
  )
}
