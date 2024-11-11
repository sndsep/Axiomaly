import Link from 'next/link'
import { Button } from '@/components/ui/forms/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
      <Button>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  )
}
