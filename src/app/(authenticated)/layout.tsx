// src/app/(authenticated)/layout.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UserNav } from "@/components/navigation/user-nav";
import Link from "next/link";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const sidebarNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/dashboard",
  },
  {
    title: "Courses",
    href: "/dashboard/courses",
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
  },
]

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
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard/courses" className="text-sm font-medium transition-colors hover:text-primary">
                Browse Courses
              </Link>
              <Link href="/dashboard/my-learning" className="text-sm font-medium transition-colors hover:text-primary">
                My Learning
              </Link>
              <Link href="/dashboard/progress" className="text-sm font-medium transition-colors hover:text-primary">
                My Progress
              </Link>
            </nav>
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
          <nav className="flex-1 space-y-1 p-4">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}