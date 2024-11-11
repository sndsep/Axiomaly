// src/app/(auth)/login/page.tsx
import { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login - VFX Academy",
  description: "Login to your VFX Academy account",
}

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left Panel - Testimonial */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img
            src="/api/placeholder/120/40"
            alt="VFX Academy"
            className="h-8"
          />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "VFX Academy has transformed my career in visual effects. The courses and mentorship were invaluable."
            </p>
            <footer className="text-sm">Sofia Davis - Senior VFX Artist at ILM</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex items-center justify-center lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <a 
              href="/register" 
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}