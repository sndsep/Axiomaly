// src/components/providers/session-provider.tsx
'use client'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

type Props = {
  children?: React.ReactNode
}

export function AuthProvider({ children }: Props) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}