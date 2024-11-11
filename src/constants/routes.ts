/**
 * @fileoverview Application route constants
 */

export const ROUTES = {
    ONBOARDING: {
      SHORT_COURSE: '/onboarding/short-course',
      DEGREE_PROGRAM: '/onboarding/degree-program',
      ADVISOR: '/advisor',
      COMPARE: '/compare',
    },
    AUTH: {
      SIGNIN: '/auth/signin',
      SIGNUP: '/auth/signup',
      FORGOT_PASSWORD: '/auth/forgot-password',
    },
    DASHBOARD: {
      ROOT: '/dashboard',
      COURSES: '/dashboard/courses',
      PROGRESS: '/dashboard/progress',
      PROFILE: '/dashboard/profile',
    },
  } as const;
  
  export type AppRoutes = typeof ROUTES;