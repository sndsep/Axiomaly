'use client'

import { ReactNode } from 'react'
import { MainNav } from "@/components/navigation/main-nav"
import { UserNav } from "@/components/navigation/user-nav"
import ClientSessionProvider from '@/components/ClientSessionProvider'

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <ClientSessionProvider>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <MainNav />
            <UserNav />
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t">
          <div className="container mx-auto px-4 py-4 text-center">
            © {new Date().getFullYear()} Your Application
          </div>
        </footer>
      </div>
    </ClientSessionProvider>
  )
}
