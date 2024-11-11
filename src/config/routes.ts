export const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/about',
  '/pricing',
  '/contact'
]

export const authRoutes = [
  '/login',
  '/register',
  '/forgot-password'
]

export const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  '/courses'
]

export const roleRoutes = {
  ADMIN: ['/admin'],
  INSTRUCTOR: ['/instructor'],
  STUDENT: ['/student']
}
