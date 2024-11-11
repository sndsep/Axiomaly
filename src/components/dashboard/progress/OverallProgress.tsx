"use client";

// src/components/dashboard/progress/OverallProgress.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { Progress } from "@/components/ui/forms/progress";

export default function OverallProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Course Completion</span>
            <span className="text-sm text-muted-foreground">0 in progress</span>
          </div>
          <Progress value={0} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-muted-foreground">Hours Learned</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-muted-foreground">Completed Courses</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}