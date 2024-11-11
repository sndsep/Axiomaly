// src/components/landing/ExpertsSection.tsx

"use client"

import Image from 'next/image'
import { Card, CardHeader, CardContent } from '@/components/ui/forms/card'

interface Expert {
  id: string
  name: string
  role: string
  company?: string
  image: string
}

const experts: Expert[] = [
  {
    id: "1",
    name: "John Doe",
    role: "VFX Supervisor",
    company: "Industrial Light & Magic",
    image: "/experts/john-doe.jpg"
  },
  {
    id: "2",
    name: "Armando Sepulveda",
    role: "VFX Supervisor",
    company: "Axiom VFX",
    image: "/experts/armando-sepulveda.jpg"
  },
  {
    id: "3",
    name: "Path Smith",
    role: "VFX Supervisor",
    company: "Industrial Light & Magic",
    image: "/experts/path-smith.jpg"
  },
  {
    id: "4",
    name: "Arthur Miller Jr.",
    role: "VFX Supervisor",
    company: "Industrial Light & Magic",
    image: "/experts/arthur-miller.jpg"
  },

  // ... more experts
]

export function ExpertsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Learn from Industry Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <Card key={expert.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
              <div className="relative h-48 w-full">
  <Image
    src={expert.image}
    alt={expert.name}
    fill
    className="object-cover rounded-t-lg"
  />
</div>
              </CardHeader>
              <CardContent className="text-center p-6">
                <h3 className="font-semibold text-lg mb-1">{expert.name}</h3>
                <p className="text-gray-600 text-sm">{expert.role}</p>
                {expert.company && (
                  <p className="text-gray-500 text-sm mt-1">{expert.company}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
