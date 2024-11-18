// src/lib/auth.ts
import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
            include: { onboardingProgress: true } // Include onboarding progress
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
        token.id = user.id;
        token.role = user.role;
        token.careerPath = user.careerPath;
        token.hasCompletedOnboarding = user.hasCompletedOnboarding;
        token.onboardingProgress = user.onboardingProgress;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.careerPath = token.careerPath;
        session.user.hasCompletedOnboarding = token.hasCompletedOnboarding;
        session.user.onboardingProgress = token.onboardingProgress;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET
};