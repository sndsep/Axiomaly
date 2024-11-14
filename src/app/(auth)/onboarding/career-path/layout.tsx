import React from 'react'

interface CareerPathLayoutProps {
  children: React.ReactNode
}

export default function CareerPathLayout({ children }: CareerPathLayoutProps) {
  return <div className="p-4 sm:p-6 lg:p-8">{children}</div>
}