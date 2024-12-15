// src/types/notifications.ts
export type NotificationType = 
  | 'GRADE'
  | 'SUBMISSION'
  | 'FEEDBACK'
  | 'ASSIGNMENT'
  | 'COURSE'
  | 'SYSTEM'

export interface NotificationData {
  grade?: number
  courseName?: string
  assignmentName?: string
  dueDate?: string
  [key: string]: any
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: NotificationType
  read: boolean
  courseId?: string
  assignmentId?: string
  data?: NotificationData
  createdAt: Date
}

export interface NotificationPreferences {
  email: boolean
  push: boolean
  inApp: boolean
  types: {
    [K in NotificationType]: boolean
  }
}