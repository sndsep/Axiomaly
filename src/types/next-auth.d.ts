// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      careerPath: string | null
      hasCompletedOnboarding: boolean
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    careerPath: string | null
    hasCompletedOnboarding: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    careerPath: string | null
    hasCompletedOnboarding: boolean
  }
}