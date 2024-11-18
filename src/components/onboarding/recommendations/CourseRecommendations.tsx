//src/components/onboarding/recommendations/CourseRecommendations.tsx

'use client';

import React from 'react';
import { useOnboarding } from '@/contexts/onboarding-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { Badge } from '@/components/ui/forms/badge';
import { Clock, Star, Users, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/forms/progress';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  duration: string;
  level: string;
  studentsCount: number;
  rating: number;
  matchScore: number;
  thumbnail: string;
  skills: string[];
}

export function CourseRecommendations() {
  const { state, dispatch, nextStep } = useOnboarding();
  const [recommendedCourses, setRecommendedCourses] = React.useState<Course[]>([]);
  const [selectedCourses, setSelectedCourses] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/user/recommentations/courses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state.surveyResponses),
        });
        
        if (!response.ok) throw new Error('Failed to fetch recommendations');
        
        const data = await response.json();
        setRecommendedCourses(data.courses);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [state.surveyResponses]);

  const handleCourseSelection = (courseId: string) => {
    setSelectedCourses(prev => {
      if (prev.includes(courseId)) {
        return prev.filter(id => id !== courseId);
      }
      if (prev.length < 3) {
        return [...prev, courseId];
      }
      return prev;
    });
  };

  const handleContinue = async () => {
    if (selectedCourses.length === 0) return;

    try {
      await fetch('/api/user/course-selection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedCourses }),
      });

      dispatch({ type: 'SET_SELECTED_COURSES', payload: selectedCourses });
      nextStep();
    } catch (error) {
      console.error('Error saving course selection:', error);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            <p className="text-gray-500">Finding the perfect courses for you...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recommended Courses</CardTitle>
          <CardDescription>
            Select up to 3 courses that match your interests and goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {recommendedCourses.map((course) => (
              <div
                key={course.id}
                className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer
                  ${selectedCourses.includes(course.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                  }`}
                onClick={() => handleCourseSelection(course.id)}
              >
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-48 h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={`/api/placeholder/192/128`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                      </div>
                      <Badge 
                        variant={selectedCourses.includes(course.id) ? "default" : "secondary"}
                        className="ml-2"
                      >
                        {selectedCourses.includes(course.id) ? 'Selected' : 'Select'}
                      </Badge>
                    </div>

                    {/* Course Meta */}
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        {course.studentsCount} students
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {course.rating.toFixed(1)}
                      </div>
                    </div>

                    {/* Skills & Match Score */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-2">
                        {course.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Match Score</span>
                        <Progress value={course.matchScore} className="w-24" />
                        <span className="text-sm font-medium">{course.matchScore}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {selectedCourses.length} of 3 courses selected
        </p>
        <Button
          onClick={handleContinue}
          disabled={selectedCourses.length === 0}
          className="flex items-center gap-2"
        >
          Continue to Profile Setup
          <CheckCircle2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}