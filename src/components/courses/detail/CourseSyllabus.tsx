// src/components/courses/detail/CourseSyllabus.tsx
export const CourseSyllabus = ({ course, isEnrolled }) => {
    return (
      <div className="space-y-6">
        {course.modules.map((module, index) => (
          <Card key={module.id}>
            <CardHeader>
              <CardTitle>
                Module {index + 1}: {module.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isEnrolled ? (
                        <Button variant="ghost" className="flex items-center gap-2">
                          <PlayCircle className="w-4 h-4" />
                          {lesson.title}
                        </Button>
                      ) : (
                        <span className="text-muted-foreground">{lesson.title}</span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  