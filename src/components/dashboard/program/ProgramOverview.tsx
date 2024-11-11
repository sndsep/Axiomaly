"use client";

// src/components/dashboard/program/ProgramOverview.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { GraduationCap } from "lucide-react";

export function ProgramOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Program Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="font-medium">SHORT_COURSE</div>
            <div className="text-sm text-muted-foreground">Level 0</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}