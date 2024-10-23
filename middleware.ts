// src/middleware.ts
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
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
    // Protege todas las rutas que requieran autenticación
  ]
}