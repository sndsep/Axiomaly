// src/app/(auth)/onboarding/career-path/page.tsx

import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { CareerPathSelection } from "@/components/onboarding/career-path/CareerPathSelection"
import { authOptions } from "@/lib/auth"

export default async function CareerPathPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) redirect('/login')
  return <CareerPathSelection />
}