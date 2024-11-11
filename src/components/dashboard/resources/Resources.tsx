"use client";

// src/components/dashboard/resources/Resources.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";

export default function Resources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground">No resources available</div>
      </CardContent>
    </Card>
  );
}