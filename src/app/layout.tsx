// src/app/layout.tsx
import { ReactNode } from 'react'
import './globals.css'
import { SessionProvider } from '@/components/providers/session-provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="max-w-4xl mx-auto p-4">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
