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
        <div className="container mx-auto flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
