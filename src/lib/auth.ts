// src/lib/auth.ts

import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

declare module "next-auth" {
  interface Session {
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
            console.log("Missing credentials");
            return null;
          }

          console.log("Looking up user:", credentials.email);
          
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });

          console.log("User found:", !!user);

          if (!user || !user.hashedPassword) {
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.hashedPassword
          );

          console.log("Password valid:", isPasswordValid);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            careerPath: user.careerPath,
            hasCompletedOnboarding: user.hasCompletedOnboarding
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
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
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET
};