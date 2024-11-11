"use client";

// src/components/dashboard/forums/DiscussionForums.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";

export default function DiscussionForums() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Discussion Forums</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground">No active discussions</div>
      </CardContent>
    </Card>
  );
}