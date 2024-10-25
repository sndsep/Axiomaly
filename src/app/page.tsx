import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Axiomaly</h1>
      <p className="text-xl mb-8">Your journey in VFX starts here</p>
      <div className="space-x-4">
        <Link href="/login">
          <Button>Sign In</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Create Account</Button>
        </Link>
      </div>
    </main>
  )
}
