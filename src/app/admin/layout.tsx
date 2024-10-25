import { ReactNode } from 'react'
import { SidebarNav } from '@/components/sidebar-nav'
import { MainNav } from '@/components/main-nav'
import { UserNav } from '@/components/user-nav'
import { RoleGuard } from "@/components/auth/role-guard"
import { UserRole } from "@/types/roles"

const sidebarNavItems = [
  {
    title: "Usuarios",
    href: "/admin/users",
  },
  // Add more items as needed
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard allowedRoles={[UserRole.ADMIN]}>
      <div className="flex min-h-screen flex-col space-y-6">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <MainNav />
            <UserNav />
          </div>
        </header>
        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </RoleGuard>
  )
}
