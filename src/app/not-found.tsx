// src/app/not-found.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/forms/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}