// src/components/courses/analytics/EngagementOverview.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { Button } from '@/components/ui/forms/button';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, Line } from 'recharts';
import { Users, Activity, AlertTriangle, Clock } from 'lucide-react';
import { useCourseEngagement } from '@/hooks/use-course-engagement';

interface EngagementOverviewProps {
  courseId: string;
}

export function EngagementOverview({ courseId }: EngagementOverviewProps) {
  const [timeRange, setTimeRange] = React.useState<'7' | '30' | '90'>('30');
  const { 
    data, 
    isLoading, 
    activeStudents, 
    averageEngagement,
    riskStudents,
    dailyEngagement 
  } = useCourseEngagement(courseId, { days: Number(timeRange) });

  if (isLoading) {
    return <div>Loading engagement data...</div>;
  }

  const metrics = [
    {
      title: 'Active Students',
      value: activeStudents,
      icon: Users,
      description: 'Students active in the last week'
    },
    {
      title: 'Average Engagement',
      value: `${averageEngagement.toFixed(1)}`,
      icon: Activity,
      description: 'Average engagement score'
    },
    {
      title: 'At Risk Students',
      value: riskStudents.length,
      icon: AlertTriangle,
      description: 'Students needing attention'
    },
    {
      title: 'Study Time',
      value: `${data?.totalStudyHours || 0}h`,
      icon: Clock,
      description: 'Total study time this period'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-end space-x-2">
        <Button
          variant={timeRange === '7' ? 'default' : 'outline'}
          onClick={() => setTimeRange('7')}
        >
          7 Days
        </Button>
        <Button
          variant={timeRange === '30' ? 'default' : 'outline'}
          onClick={() => setTimeRange('30')}
        >
          30 Days
        </Button>
        <Button
          variant={timeRange === '90' ? 'default' : 'outline'}
          onClick={() => setTimeRange('90')}
        >
          90 Days
        </Button>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </p>
                  <h2 className="text-3xl font-bold">{metric.value}</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {metric.description}
                  </p>
                </div>
                <metric.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="daily">
        <TabsList>
          <TabsTrigger value="daily">Daily Activity</TabsTrigger>
          <TabsTrigger value="students">Student Progress</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Daily Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailyEngagement}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="activeUsers"
                      stroke="#2563eb"
                      name="Active Users"
                    />
                    <Line
                      type="monotone"
                      dataKey="averageScore"
                      stroke="#16a34a"
                      name="Avg. Engagement Score"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Student Progress Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data?.studentsEngagement || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="score"
                      fill="#2563eb"
                      name="Engagement Score"
                    />
                    <Bar
                      dataKey="activities"
                      fill="#16a34a"
                      name="Activities"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle>At-Risk Students</CardTitle>
            </CardHeader>
            <CardContent>
              {riskStudents.length > 0 ? (
                <div className="divide-y">
                  {riskStudents.map((student) => (
                    <div
                      key={student.userId}
                      className="py-4 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.daysInactive} days inactive | {student.completionRate.toFixed(1)}% completion rate
                        </p>
                      </div>
                      <Button variant="outline">Contact Student</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  No students currently at risk
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}