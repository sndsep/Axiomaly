"use client"

// File: src/components/ui/user-avatar.tsx
// Enhanced user avatar component with fallback, loading states, and status indicator

import { useMemo } from 'react'
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar/avatar'
import { User } from '@/types/user'
import { Skeleton } from '@/components/ui/loading/skeleton'

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: Pick<User, 'image' | 'name'> | null
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  showStatus?: boolean
  status?: 'online' | 'offline' | 'busy' | 'away'
  fallbackBackground?: 'gradient' | 'solid'
}

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  busy: 'bg-red-500',
  away: 'bg-yellow-500'
}

export function UserAvatar({ 
  user, 
  size = 'md', 
  loading = false,
  showStatus = false,
  status = 'offline',
  fallbackBackground = 'gradient',
  className,
  ...props 
}: UserAvatarProps) {
  const dimensions = useMemo(() => {
    const sizes = {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl'
    }
    return sizes[size]
  }, [size])

  const statusSize = useMemo(() => {
    const sizes = {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-4 w-4'
    }
    return sizes[size]
  }, [size])

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const fallbackStyles = useMemo(() => {
    if (fallbackBackground === 'gradient') {
      return 'bg-gradient-to-br from-blue-500 to-purple-500'
    }
    return 'bg-gray-200'
  }, [fallbackBackground])

  if (loading) {
    return <Skeleton className={cn(`${dimensions} rounded-full`, className)} {...props} />
  }

  return (
    <div className="relative" {...props}>
      <Avatar className={cn(dimensions, className)}>
        {user?.image ? (
          <AvatarImage 
            src={user.image} 
            alt={user.name || 'User avatar'}
            className="object-cover"
          />
        ) : null}
        <AvatarFallback 
          className={cn(
            fallbackStyles,
            "text-white font-medium flex items-center justify-center",
            !user?.image && "uppercase"
          )}
          delayMs={600}
        >
          {user?.name ? getInitials(user.name) : '?'}
        </AvatarFallback>
      </Avatar>
      
      {showStatus && (
        <span 
          className={cn(
            'absolute bottom-0 right-0 rounded-full ring-2 ring-white',
            statusColors[status],
            statusSize
          )}
        />
      )}
    </div>
  )
}