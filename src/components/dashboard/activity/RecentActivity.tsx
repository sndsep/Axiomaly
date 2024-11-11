"use client";

// src/components/dashboard/activity/RecentActivity.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground">No recent activity</div>
      </CardContent>
    </Card>
  );
}