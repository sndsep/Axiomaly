import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'

import { ProfileForm } from "./components/profile-form"
import { PreferencesForm } from "./components/preferences-form"
import { AccountForm } from "./components/account-form"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <div className="grid gap-6">
        <ProfileForm />
        <PreferencesForm />
      </div>
    </div>
  )
}
