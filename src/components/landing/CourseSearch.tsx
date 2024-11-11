// src/components/landing/CourseSearch.tsx
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/forms/input"
import { Button } from "@/components/ui/forms/button"
import { Search } from "lucide-react"

const categories = [
  "3D Modeling",
  "Animation",
  "Compositing",
  "Rendering",
  "VFX Supervision",
  "Motion Graphics"
]

export function CourseSearch() {
  const [selectedCategory, setSelectedCategory] = useState<string>()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Course</h2>
            <p className="text-gray-600">
              Explore our wide range of VFX courses and start your journey
            </p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search courses..." 
              className="pl-10 h-12"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
