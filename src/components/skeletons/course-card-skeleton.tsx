import { Card, CardContent, CardHeader } from "@/components/ui/forms/card"

export function CourseCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <div className="relative h-48 w-full bg-muted rounded-t-lg" />
      <CardHeader>
        <div className="h-6 w-3/4 bg-muted rounded" />
        <div className="h-4 w-1/2 bg-muted rounded mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
          </div>
          <div className="h-2 w-full bg-muted rounded" />
          <div className="h-9 w-full bg-muted rounded" />
        </div>
      </CardContent>
    </Card>
  )
}
