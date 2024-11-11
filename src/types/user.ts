import { UserRole } from './roles'

export interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role: 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'
  emailVerified?: Date | null
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}
