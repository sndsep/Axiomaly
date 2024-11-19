/**
 * File: src/lib/auth-utils.ts
 * Description: Authentication configuration and utilities
 */

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error("User not found")
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.hashedPassword
        )

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role
        }
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    }
  }
}

// Helper function to check if user is authenticated
export const isAuthenticated = async () => {
  try {
    const response = await fetch('/api/auth/session')
    const session = await response.json()
    return !!session?.user
  } catch (error) {
    console.error('Auth check error:', error)
    return false
  }
}

// Helper function to get current user session
export const getCurrentUser = async () => {
  try {
    const response = await fetch('/api/auth/session')
    const session = await response.json()
    return session?.user || null
  } catch (error) {
    console.error('Get user error:', error)
    return null
  }
}