// src/lib/auth.ts

import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

// Extend next-auth types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
      careerPath: string | null;
      hasCompletedOnboarding: boolean;
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    role: string;
    careerPath: string | null;
    hasCompletedOnboarding: boolean;
  }
}

// Test users for development
const testUsers = [
  {
    id: "1",
    name: "Test Student",
    email: "student@test.com",
    role: "STUDENT",
    careerPath: "SHORT_COURSE",
    hasCompletedOnboarding: false
  },
  {
    id: "2",
    name: "Test Admin",
    email: "admin@test.com",
    role: "ADMIN",
    careerPath: null,
    hasCompletedOnboarding: true
  },
  {
    id: "3",
    name: "Test Instructor",
    email: "instructor@test.com",
    role: "INSTRUCTOR",
    careerPath: null,
    hasCompletedOnboarding: true
  }
];

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Development Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log("Auth attempt for:", credentials?.email);

          if (!credentials?.email) {
            console.log("No email provided");
            return null;
          }

          // In development mode, use test users
          if (process.env.NODE_ENV === "development") {
            const testUser = testUsers.find(user => user.email === credentials.email);
            console.log("Development mode - Test user found:", !!testUser);
            return testUser || null;
          }

          // In production, use database
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          console.log("User found:", !!user);
          return user;

        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login"
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.careerPath = user.careerPath;
        token.hasCompletedOnboarding = user.hasCompletedOnboarding;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.careerPath = token.careerPath;
        session.user.hasCompletedOnboarding = token.hasCompletedOnboarding;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};