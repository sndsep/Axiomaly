// src/app/(authenticated)/layout.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UserNav } from "@/components/navigation/user-nav";
import { RoleSidebar } from "@/components/dashboard/layout/sidebar/role-sidebar";
import Link from "next/link";
import { MainNav } from "@/components/navigation/main-nav";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/dashboard" className="font-bold">
              VFX Academy
            </Link>
            {/* Main Navigation */}
            <MainNav />
          </div>
          {/* Search and User Nav */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-64 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
              />
            </div>
            <UserNav user={session.user} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex container mx-auto p-4">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40">
          <RoleSidebar />
        </aside>

        {/* Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}