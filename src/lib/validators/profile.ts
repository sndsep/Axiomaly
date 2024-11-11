// File: src/lib/validators/profile.ts
// Core validation schemas for user profile data

import * as z from "zod"

export const profileSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(30, { message: "Name must not be longer than 30 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  bio: z
    .string()
    .max(160, { message: "Bio must not be longer than 160 characters." })
    .optional(),
  urls: z.object({
    portfolio: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    twitter: z.string().url().optional().or(z.literal(""))
  }).optional(),
  preferences: z.object({
    theme: z.enum(["light", "dark", "system"]).optional(),
    emailNotifications: z.boolean().optional(),
    marketingEmails: z.boolean().optional(),
    courseUpdates: z.boolean().optional()
  }).optional()
})