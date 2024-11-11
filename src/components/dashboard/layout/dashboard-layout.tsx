// File: src/components/dashboard/layout/dashboard-layout.tsx
// Main layout component that combines header, footer, and sidebar

import { DashboardHeader } from './dashboard-header'
import { DashboardFooter } from './dashboard-footer'
import { DashboardSidebar } from './sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      
      <div className="flex-1 flex">
        <DashboardSidebar />
        
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
      
      <DashboardFooter />
    </div>
  )
}