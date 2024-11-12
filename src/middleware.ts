// src/middleware.ts
import { withAuth } from "next-auth/middleware"
import { NextResponse } from 'next/server'
import type { NextRequestWithAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname } = req.nextUrl
    
    // If user is not authenticated and tries to access protected routes
    if (!req.nextauth.token && !pathname.startsWith('/login') && !pathname.startsWith('/register')) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // If user is authenticated and tries to access auth pages
    if (req.nextauth.token && (pathname.startsWith('/login') || pathname.startsWith('/register'))) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Add security headers
    const response = NextResponse.next()
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    return response
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl
        
        // Allow access to public paths
        if (pathname.startsWith('/public')) return true
        if (pathname === '/') return true
        if (pathname.startsWith('/login')) return true
        if (pathname.startsWith('/register')) return true
        if (pathname.startsWith('/api/auth')) return true
        
        // Require authentication for all other paths
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes that don't start with /api/auth
     * 2. /_next (static files)
     * 3. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    '/((?!api/(?!auth)|_next/|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}