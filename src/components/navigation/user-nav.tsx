'use client'

import { signOut, useSession } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function UserNav() {
  const { data: session, update } = useSession()
  const [avatarUrl, setAvatarUrl] = useState(session?.user?.image || '')

  useEffect(() => {
    const updateAvatar = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`/api/user/${session.user.id}`)
          if (response.ok) {
            const userData = await response.json()
            setAvatarUrl(userData.image)
            await update({ ...session, user: { ...session.user, image: userData.image } })
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    }
    updateAvatar()
  }, [session, update])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatarUrl} alt="Profile Avatar" />
            <AvatarFallback>
              {session?.user?.name?.charAt(0) || session?.user?.email?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
