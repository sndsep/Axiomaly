// src/lib/auth.ts
import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          careerPath: user.careerPath,
          hasCompletedOnboarding: user.hasCompletedOnboarding,
          onboardingProgress: user.onboardingProgress
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          careerPath: token.careerPath,
          hasCompletedOnboarding: token.hasCompletedOnboarding,
          onboardingProgress: token.onboardingProgress
        }
      };
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  secret: process.env.NEXTAUTH_SECRET
};