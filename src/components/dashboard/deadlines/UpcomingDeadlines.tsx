"use client";

// src/components/dashboard/deadlines/UpcomingDeadlines.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";

export default function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground">No upcoming deadlines</div>
      </CardContent>
    </Card>
  );
}