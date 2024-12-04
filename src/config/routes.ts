// src/config/routes.ts

export const routes = {
  home: '/',
  auth: {
    login: '/login',
    register: '/register'
  },
  browse: {
    courses: '/courses',  // Main catalog of all available courses
  },
  resources: '/resources',
  help: '/help',
  dashboard: {
    index: '/dashboard',
    courses: '/dashboard/courses', // Enrolled courses
    progress: '/dashboard/progress',
    calendar: '/dashboard/calendar'
  }
} as const