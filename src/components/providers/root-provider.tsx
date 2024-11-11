// src/components/providers/root-provider.tsx
'use client'

import { ThemeProvider } from "@/components/providers/theme-provider"
import { SessionProvider } from "next-auth/react"

export function RootProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}