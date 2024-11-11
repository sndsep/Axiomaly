"use client";

// src/components/dashboard/mentorship/Mentorship.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { Button } from "@/components/ui/forms/button";

export default function Mentorship() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mentorship</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Schedule Session</Button>
      </CardContent>
    </Card>
  );
}