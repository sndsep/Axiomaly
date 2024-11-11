// src/app/(authenticated)/dashboard/profile/page.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { ProfileForm } from "./profile-form";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  // Fetch complete user data including preferences
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      preferences: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
        <div className="border-t pt-8">
          <ProfileForm user={user} />
        </div>
      </div>
    </div>
  );
}