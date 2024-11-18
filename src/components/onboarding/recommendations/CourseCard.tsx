// src/components/onboarding/recommendations/CourseCard.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/forms/card"
import { Badge } from "@/components/ui/forms/badge"
import { Button } from "@/components/ui/forms/button"
import { Clock, Users, Star } from "lucide-react"
import type { CourseRecommendation } from "@/types/courses"

interface CourseCardProps {
  course: CourseRecommendation
  featured?: boolean
  onEnroll?: (courseId: string) => void
  loading?: boolean
}

export function CourseCard({ 
  course, 
  featured, 
  onEnroll,
  loading 
}: CourseCardProps) {
  const {
    id,
    title,
    description,
    duration,
    level,
    rating,
    enrolledStudents,
    instructor,
    matchPercentage,
    matchedInterests
  } = course

  return (
    <Card className={`
      relative overflow-hidden
      ${featured ? 'border-2 border-blue-500 shadow-lg' : ''}
    `}>
      {featured && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm">
          Best Match
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">
              by {instructor.name}
            </p>
          </div>
          <Badge variant={level === 'beginner' ? 'default' : 'secondary'}>
            {level}
          </Badge>
        </div>
        {matchPercentage && (
          <div className="flex items-center space-x-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{matchPercentage}% match</span>
            <span className="text-gray-500">based on your interests</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {matchedInterests.map(interest => (
            <Badge key={interest} variant="outline" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          {enrolledStudents && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {enrolledStudents.toLocaleString()} students
            </div>
          )}
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {rating.toFixed(1)}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full"
          onClick={() => onEnroll?.(id)}
          disabled={loading}
        >
          {loading ? 'Enrolling...' : 'Enroll Now'}
        </Button>
      </CardFooter>
    </Card>
  )
}
