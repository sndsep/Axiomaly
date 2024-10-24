'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { UserNav } from '@/components/navigation/user-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <MainNav />
          <UserNav />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
