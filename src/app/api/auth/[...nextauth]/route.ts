// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Credenciales invalidas");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Credenciales invalidas");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Credenciales invalidas");
        }

        return user;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role // Asegúrate de que tu modelo de usuario incluya el rol
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.role = token.role
        session.user.id = token.id
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
