export const ROUTES = {
  PUBLIC: {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
  },
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
  },
  DASHBOARD: {
    HOME: '/dashboard',
    COURSES: '/dashboard/courses',
    PROFILE: '/dashboard/profile',
    RESOURCES: '/dashboard/resources',
  },
  ADMIN: {
    HOME: '/admin',
    USERS: '/admin/users',
    SETTINGS: '/admin/settings',
  },
  API: {
    AUTH: '/api/auth',
    COURSES: '/api/courses',
    USERS: '/api/users',
    RESOURCES: '/api/resources',
  },
} as const

export function isProtectedRoute(pathname: string): boolean {
  return (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/instructor') ||
    pathname.startsWith('/student')
  )
}

export function getRedirectUrl(role: string): string {
  switch (role) {
    case 'ADMIN':
      return ROUTES.ADMIN.HOME
    case 'INSTRUCTOR':
      return ROUTES.DASHBOARD.HOME
    case 'STUDENT':
      return ROUTES.DASHBOARD.HOME
    default:
      return ROUTES.PUBLIC.HOME
  }
}
