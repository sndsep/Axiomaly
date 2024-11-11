// src/components/providers/ClientScripts.tsx
'use client'

export function ClientScripts() {
  return null // O retorna los scripts necesarios
}

// src/app/layout.tsx
import { ClientScripts } from '@/components/providers/ClientScripts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  )
}