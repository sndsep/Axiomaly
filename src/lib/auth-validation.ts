// src/lib/auth-validation.ts
// Validation utilities for authentication forms

import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(50, "Password must be less than 50 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must contain: uppercase, lowercase, number, special character"
  );

export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(1, "Email is required");

export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be less than 50 characters")
  .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces");

export const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

// src/lib/auth-utils.ts
// Authentication utility functions

import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

export const verifyPassword = async (password: string, hashedPassword: string) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};

export async function checkUserExists(email: string): Promise<boolean> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return !!user;
  } catch (error) {
    console.error("Error checking user existence:", error);
    return false;
  }
}

export async function getUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        hashedPassword: true,
      },
    });
  } catch (error) {
    console.error("Error getting user by email:", error);
    return null;
  }
}

export async function checkOnboardingStatus(userId: string) {
  try {
    const onboarding = await prisma.onboardingProgress.findUnique({
      where: { userId },
    });

    return {
      needsOnboarding: !onboarding?.completed,
      currentStep: onboarding?.currentStep || 1,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return {
      needsOnboarding: true,
      currentStep: 1,
    };
  }
}

// Types for authentication
export interface AuthError {
  type: "CredentialsSignin" | "EmailSignin" | "EmailCreateAccount" | "Configuration" | "AccessDenied" | "OAuthSignin" | "OAuthCallback" | "OAuthCreateAccount" | "EmailSend" | "AuthorizedCallback" | "Default";
  message: string;
}

export interface UserSession {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  expires: string;
}

// Constants
export const AUTH_ERRORS = {
  CredentialsSignin: "Invalid email or password",
  EmailSignin: "Error sending login email",
  EmailCreateAccount: "Error creating account",
  Configuration: "Server configuration error",
  AccessDenied: "Access denied",
  OAuthSignin: "Error in OAuth sign in",
  OAuthCallback: "Error in OAuth callback",
  OAuthCreateAccount: "Error creating OAuth account",
  EmailSend: "Error sending email",
  AuthorizedCallback: "Error in authorization callback",
  Default: "Authentication error",
} as const;

// Helper functions for error handling
export function getAuthErrorMessage(type: AuthError["type"]): string {
  return AUTH_ERRORS[type] || AUTH_ERRORS.Default;
}

export function isAuthError(error: unknown): error is AuthError {
  return (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    "message" in error
  );
}

// src/lib/session.ts
// Session management utilities

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function requireAuth() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}