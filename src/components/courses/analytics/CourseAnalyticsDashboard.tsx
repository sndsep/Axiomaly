// src/components/courses/analytics/CourseAnalyticsDashboard.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { LineChart, BarChart, PieChart, ResponsiveContainer, Line, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { Users, Clock, BookOpen, Trophy, TrendingUp, Activity } from 'lucide-react';
import { useInstructorAnalytics } from '@/hooks/use-instructor-analytics';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ElementType;
  loading?: boolean;
}

const MetricCard = ({ title, value, change, icon: Icon, loading }: MetricCardProps) => {
  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {change !== undefined && (
              <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {change > 0 ? '+' : ''}{change}% from last month
              </p>
            )}
          </div>
          <div className="p-3 bg-blue-50 rounded-full">
            <Icon className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CourseAnalyticsDashboardProps {
  courseId: string;
}

export function CourseAnalyticsDashboard({ courseId }: CourseAnalyticsDashboardProps) {
  const { 
    data, 
    isLoading, 
    error,
    stats,
    studentCount,
    completionRate,
    averageProgress
  } = useInstructorAnalytics(courseId);

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-red-600">
          Error loading analytics: {error}
        </CardContent>
      </Card>
    );
  }

  const metrics = [
    {
      title: "Total Students",
      value: studentCount,
      icon: Users,
      change: data?.studentGrowth
    },
    {
      title: "Course Completion",
      value: `${completionRate}%`,
      icon: Trophy,
      change: data?.completionRateChange
    },
    {
      title: "Average Progress",
      value: `${averageProgress}%`,
      icon: TrendingUp,
      change: data?.progressChange
    },
    {
      title: "Active Students",
      value: data?.activeStudents || 0,
      icon: Activity,
      change: data?.activityChange
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            {...metric}
            loading={isLoading}
          />
        ))}
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="progress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="time">Time Spent</TabsTrigger>
        </TabsList>

        {/* Progress Tab */}
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Student Progress Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data?.progressData || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="progress" 
                      stroke="#3b82f6" 
                      name="Average Progress (%)" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Student Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data?.engagementData || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="activeUsers" fill="#3b82f6" name="Active Users" />
                    <Bar dataKey="submissions" fill="#10b981" name="Submissions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lessons Tab */}
        <TabsContent value="lessons">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Completion Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data?.lessonStats || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="completionRate" 
                      fill="#3b82f6" 
                      name="Completion Rate (%)" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Time Spent Tab */}
        <TabsContent value="time">
          <Card>
            <CardHeader>
              <CardTitle>Time Spent per Lesson</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data?.lessonStats || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="averageTime" 
                      fill="#3b82f6" 
                      name="Average Time (minutes)" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}