// src/app/(auth)/register/page.tsx

import { Metadata } from "next"
import { RegisterForm } from "@/components/auth/register-form"

export const metadata: Metadata = {
  title: "Register - VFX Academy",
  description: "Create an account to get started with VFX Academy",
}

export default function RegisterPage() {
  return (
    <div className="relative h-screen w-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
              "Join our community of VFX artists and take your skills to the next level. Start your journey today."
            </p>
            <footer className="text-sm">VFX Academy Team</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex items-center justify-center lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details to get started
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}