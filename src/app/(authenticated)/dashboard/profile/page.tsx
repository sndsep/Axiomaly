import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { ProfileForm } from "@/components/dashboard/profile/profile-form"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="container max-w-2xl py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile information
        </p>
      </div>
      
      <ProfileForm user={session.user} />
    </div>
  )
} 