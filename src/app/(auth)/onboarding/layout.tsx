// src/app/(auth)/onboarding/layout.tsx
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { Toaster } from "@/components/ui/forms/toaster"
import { ProgressBar } from "@/components/onboarding/ProgressBar"

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4">
        <ProgressBar />
        {children}
      </main>
      <Toaster />
    </div>
  )
}