// src/app/layout.tsx
import { ReactNode } from 'react'
import './globals.css'
import { SessionProvider } from '@/components/providers/session-provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
