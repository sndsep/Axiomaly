// types/next-auth.d.ts
import { DefaultSession } from "next-auth"
import { UserRole } from "./roles"
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role?: UserRole
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: UserRole
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
  }
}
