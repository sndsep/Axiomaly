// File: src/lib/validations/profile.ts
// Extended validation logic and types for profile-related features

import { profileSchema } from "../validators/profile"
import { z } from "zod"

// Extend the base profile schema with additional validation rules
export const updatePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message: "Password must include uppercase, lowercase, number and special character."
      }
    ),
  confirmPassword: z
    .string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"]
})

export const notificationsSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  courseUpdates: z.boolean(),
  mentorMessages: z.boolean().optional(),
  forumUpdates: z.boolean().optional(),
  projectFeedback: z.boolean().optional()
})

export const securitySchema = z.object({
  twoFactorEnabled: z.boolean(),
  sessionTimeout: z.number().min(15).max(240),
  loginNotifications: z.boolean()
})

// Types
export type ProfileFormData = z.infer<typeof profileSchema>
export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>
export type NotificationsFormData = z.infer<typeof notificationsSchema>
export type SecurityFormData = z.infer<typeof securitySchema>

// Validation functions
export const validateProfileData = (data: unknown): ProfileFormData => {
  return profileSchema.parse(data)
}

export const validatePasswordUpdate = (data: unknown): UpdatePasswordFormData => {
  return updatePasswordSchema.parse(data)
}

export const validateNotificationsSettings = (data: unknown): NotificationsFormData => {
  return notificationsSchema.parse(data)
}

export const validateSecuritySettings = (data: unknown): SecurityFormData => {
  return securitySchema.parse(data)
}