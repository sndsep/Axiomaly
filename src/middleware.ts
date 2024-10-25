import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// Implementación simple de rate limiting en memoria
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const WINDOW_MS = 15 * 60 * 1000 // 15 minutos
const MAX_REQUESTS = 100 // máximo de solicitudes por ventana

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowStart = now - WINDOW_MS
  
  // Limpiar entradas antiguas
  for (const [key, value] of rateLimit.entries()) {
    if (value.timestamp < windowStart) {
      rateLimit.delete(key)
    }
  }

  const current = rateLimit.get(ip)
  if (!current) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (current.timestamp < windowStart) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (current.count >= MAX_REQUESTS) {
    return false
  }

  current.count++
  return true
}

export default withAuth(
  function middleware(req) {
    const ip = req.ip || 'anonymous'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const token = req.nextauth.token
    const isAuth = !!token
    const isAdmin = token?.role === "ADMIN"
    const isInstructor = token?.role === "INSTRUCTOR"
    const isStudent = token?.role === "STUDENT"
    const pathname = req.nextUrl.pathname

    // Rutas exclusivas para administradores
    if (pathname.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // Rutas exclusivas para instructores
    if (pathname.startsWith("/instructor") && !isInstructor) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // Rutas exclusivas para estudiantes
    if (pathname.startsWith("/student") && !isStudent) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()
  },
  {
    pages: {
      signIn: "/login",
      error: "/error",
    },
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/settings/:path*",
    "/admin/:path*",
    "/instructor/:path*",
    "/student/:path*",
    "/courses/:path*",
    "/profile/:path*",
    "/resources/:path*",
  ]
}
