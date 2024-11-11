"use client";

// src/components/dashboard/course/CurrentCourse.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";

export default function CurrentCourse() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Course</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground">No active courses</div>
      </CardContent>
    </Card>
  );
}