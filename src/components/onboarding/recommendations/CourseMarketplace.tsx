// src/components/onboarding/recommendations/CourseMarketplace.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CourseCard } from './CourseCard'
import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/forms/select'
import { Badge } from '@/components/ui/forms/badge'
import { Loader2, Search, SlidersHorizontal } from 'lucide-react'
import type { CourseRecommendation } from '@/types/courses'
import { toast } from '@/components/ui/hooks/use-toast'

interface CourseMarketplaceProps {
  recommendedCourses: CourseRecommendation[]
  userInterests: string[]
}

export function CourseMarketplace({ 
  recommendedCourses,
  userInterests 
}: CourseMarketplaceProps) {
  const router = useRouter()
  const [isEnrolling, setIsEnrolling] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')

  const filteredCourses = recommendedCourses
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(course => 
      selectedLevel === 'all' || course.level === selectedLevel
    )
    .sort((a, b) => b.matchPercentage - a.matchPercentage)

  const handleEnroll = async (courseId: string) => {
    try {
      setIsEnrolling(courseId)
      
      const response = await fetch('/api/courses/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId })
      })

      if (!response.ok) throw new Error('Failed to enroll')

      await fetch('/api/onboarding/complete', {
        method: 'POST'
      })

      router.push('/dashboard')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to enroll in course. Please try again.",
        variant: "destructive"
      })
      setIsEnrolling(null)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">
          Recommended Courses for You
        </h1>
        <p className="text-gray-600">
          Based on your interests in {userInterests.join(', ')}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search courses..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select 
          value={selectedLevel}
          onValueChange={setSelectedLevel}
        >
          <SelectTrigger className="w-[180px]">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            featured={index === 0}
            onEnroll={handleEnroll}
            loading={isEnrolling === course.id}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found matching your criteria.</p>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <Button variant="outline" onClick={() => router.push('/courses')}>
          Explore All Courses
        </Button>
        <Button variant="outline" onClick={() => router.push('/advisor')}>
          Talk to an Advisor
        </Button>
      </div>
    </div>
  )
}
