// src/contexts/user-context.tsx
'use client'

import { createContext, useContext } from 'react'
import type { SafeUser } from '@/types/user'
import type { CourseProgress, OverallProgress } from '@/types/progress'

interface UserContextType {
  user: SafeUser | null
  progress: OverallProgress
  courseProgress: Record<string, CourseProgress>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ 
  children,
  initialUser,
  initialProgress,
  initialCourseProgress
}: {
  children: React.ReactNode
  initialUser: SafeUser | null
  initialProgress: OverallProgress
  initialCourseProgress: Record<string, CourseProgress>
}) {
  return (
    <UserContext.Provider 
      value={{
        user: initialUser,
        progress: initialProgress,
        courseProgress: initialCourseProgress
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}