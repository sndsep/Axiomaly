// src/components/landing/Hero.tsx

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/forms/button"

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Master VFX Skills
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Learn from industry experts and build your career in visual effects
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/register">Start Learning Now</Link>
        </Button>
      </div>
    </section>
  )
} 