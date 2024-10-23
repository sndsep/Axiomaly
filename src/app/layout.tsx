// src/app/layout.tsx
import { SessionProvider } from '@/components/providers/session-provider'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}