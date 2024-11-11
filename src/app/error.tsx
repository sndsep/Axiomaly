'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/forms/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
      <Button onClick={() => reset()}>Intentar de nuevo</Button>
    </div>
  )
}
