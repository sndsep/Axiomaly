// src/components/courses/detail/CourseProgress.tsx
export const CourseProgress = ({ courseId }) => {
    const { progress, lessons } = useCourseProgress(courseId)
  
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="text-sm text-muted-foreground mb-2">
                Overall Progress: {progress.overall}%
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all"
                  style={{ width: `${progress.overall}%` }}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm text-muted-foreground">
                      Progress: {lesson.progress}%
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {lesson.completed ? 'Review' : 'Continue'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  