// src/components/dashboard/courses/course-stats.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { Progress } from "@/components/ui/forms/progress";
import { Users, Clock, Award, Star } from "lucide-react";

interface CourseStatsProps {
  stats: {
    enrolledStudents: number;
    averageProgress: number;
    completionRate: number;
    averageRating: number;
    totalDuration: string;
  }
}

export function CourseStats({ stats }: CourseStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Enrolled Students</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.enrolledStudents}</div>
          <Progress value={stats.averageProgress} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1">
            {stats.averageProgress}% average progress
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Duration</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalDuration}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Estimated completion time
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.completionRate}%</div>
          <Progress value={stats.completionRate} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-1">
            of students complete the course
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageRating.toFixed(1)}</div>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(stats.averageRating) 
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}