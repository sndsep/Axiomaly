import { PrismaAdapter } from "@auth/prisma-adapter"
import { compare } from "bcryptjs"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "@/lib/db/db"
import { UserRole } from "@/types/roles"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials")
        }

        const isValid = await compare(credentials.password, user.hashedPassword)

        if (!isValid) {
          throw new Error("Invalid credentials")
        }

        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.role = user.role || UserRole.STUDENT
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id
        session.user.role = token.role as UserRole
      }
      return session
    }
  },
  pages: {
    signIn: "/login"
  },
  debug: process.env.NODE_ENV === "development",
}
