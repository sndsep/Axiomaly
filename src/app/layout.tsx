// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { RootProvider } from "@/components/providers/root-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VFX Academy",
  description: "Learn VFX from industry experts",
  keywords: ["VFX", "Visual Effects", "3D Animation", "Online Learning", "VFX Academy"],
  authors: [{ name: "VFX Academy Team" }],
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}