// src/components/courses/analytics/StudentEngagementDetails.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Progress } from '@/components/ui/forms/progress';
import { Button } from '@/components/ui/forms/button';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';
import { Clock, BookOpen, MessageSquare, Trophy } from 'lucide-react';

interface ActivityLog {
  type: string;
  description: string;
  timestamp: string;
}

interface StudentEngagementDetailsProps {
  courseId: string;
  studentId: string;
  studentName: string;
}

export function StudentEngagementDetails({
  courseId,
  studentId,
  studentName
}: StudentEngagementDetailsProps) {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'day' | 'week' | 'month'>('week');
  const [activityLogs, setActivityLogs] = React.useState<ActivityLog[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchStudentDetails() {
      try {
        const response = await fetch(
          `/api/courses/${courseId}/students/${studentId}/engagement?period=${selectedPeriod}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch student details');
        
        const data = await response.json();
        setActivityLogs(data.activityLogs);
      } catch (error) {
        console.error('Error fetching student details:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStudentDetails();
  }, [courseId, studentId, selectedPeriod]);

  if (isLoading) {
    return <div>Loading student details...</div>;
  }

  const metrics = [
    {
      title: 'Study Time',
      value: '12h 30m',
      icon: Clock,
      change: '+2.5h',
    },
    {
      title: 'Lessons Completed',
      value: '8/12',
      icon: BookOpen,
      change: '+2',
    },
    {
      title: 'Discussion Posts',
      value: '5',
      icon: MessageSquare,
      change: '+1',
    },
    {
      title: 'Achievements',
      value: '3',
      icon: Trophy,
      change: '+1',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{studentName}</h2>
          <p className="text-muted-foreground">Student Engagement Details</p>
        </div>
        <div className="space-x-2">
          <Button
            variant={selectedPeriod === 'day' ? 'default' : 'outline'}
            onClick={() => setSelectedPeriod('day')}
          >
            Day
          </Button>
          <Button
            variant={selectedPeriod === 'week' ? 'default' : 'outline'}
            onClick={() => setSelectedPeriod('week')}
          >
            Week
          </Button>
          <Button
            variant={selectedPeriod === 'month' ? 'default' : 'outline'}
            onClick={() => setSelectedPeriod('month')}
          >
            Month
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </p>
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                  <p className={`text-sm ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change} this {selectedPeriod}
                  </p>
                </div>
                <metric.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activityLogs.map((log, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium">{log.type}</p>
                  <p className="text-sm text-muted-foreground">{log.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Over Time */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityLogs}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#2563eb" 
                  name="Course Progress" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}