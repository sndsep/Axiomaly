// src/lib/auth.ts
import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
      careerPath?: string;
      hasCompletedOnboarding: boolean;
      onboardingProgress?: {
        currentStep: string;
        completed: boolean;
      };
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    role: string;
    careerPath?: string;
    hasCompletedOnboarding: boolean;
    onboardingProgress?: {
      currentStep: string;
      completed: boolean;
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        // Fetch fresh user data
        const user = await prisma.user.findUnique({
          where: { id: token.sub },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
            careerPath: true,
            hasCompletedOnboarding: true,
            onboardingProgress: true
          }
        });

        // Update session with fresh data
        session.user = user || session.user;
        session.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            include: { onboardingProgress: true }
          });

          if (!user || !user.hashedPassword) {
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            careerPath: user.careerPath,
            hasCompletedOnboarding: user.hasCompletedOnboarding,
            onboardingProgress: user.onboardingProgress
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
};