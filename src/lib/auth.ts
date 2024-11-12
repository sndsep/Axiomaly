// src/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { 
              email: credentials.email.toLowerCase(),
            },
            include: {
              onboardingProgress: true,
            }
          });

          if (!user || !user.hashedPassword) {
            console.log("User not found or no password");
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isPasswordValid) {
            console.log("Invalid password");
            return null;
          }

          console.log("User authenticated:", {
            id: user.id,
            email: user.email,
            hasCompletedOnboarding: user.hasCompletedOnboarding,
            careerPath: user.careerPath,
            onboardingStep: user.onboardingProgress?.currentStep,
          });

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            careerPath: user.careerPath,
            hasCompletedOnboarding: user.hasCompletedOnboarding,
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
        // Update token with user data
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.careerPath = user.careerPath;
        token.hasCompletedOnboarding = user.hasCompletedOnboarding;
      } else {
        // Keep token data fresh on subsequent requests
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { 
            careerPath: true, 
            hasCompletedOnboarding: true 
          }
        });

        if (dbUser) {
          token.careerPath = dbUser.careerPath;
          token.hasCompletedOnboarding = dbUser.hasCompletedOnboarding;
        }
      }

      console.log("JWT token updated:", token);
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.careerPath = token.careerPath as string | null;
        session.user.hasCompletedOnboarding = token.hasCompletedOnboarding as boolean;
      }

      console.log("Session updated:", session);
      return session;
    }
  },
  debug: process.env.NODE_ENV === 'development',
};