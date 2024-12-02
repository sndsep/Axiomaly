"use client"

// File: src/components/ui/user-avatar.tsx
// Enhanced user avatar component with fallback, loading states, and status indicator

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/forms/avatar"
import { User } from "next-auth"
import { Icons } from "@/components/ui/forms/icons"

interface UserAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
  user: Pick<User, "name" | "image" | "email">
  size?: "default" | "lg" | "sm" | "xl"
}

export function UserAvatar({ user, size = "default", ...props }: UserAvatarProps) {
  const sizeClasses = {
    default: "h-8 w-8",
    sm: "h-6 w-6",
    lg: "h-12 w-12",
    xl: "h-20 w-20"
  }

  return (
    <Avatar {...props} className={`${sizeClasses[size]} ${props.className ?? ""}`}>
      {user.image ? (
        <AvatarImage 
          src={user.image} 
          alt={user.name ?? "User avatar"} 
        />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}