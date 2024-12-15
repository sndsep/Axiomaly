// src/components/courses/instructor/analytics/InstructorDashboard.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, Line } from 'recharts';
import { Users, BookOpen, Trophy, Clock } from 'lucide-react';
import { StudentProgress } from './StudentProgress';
import { CourseCompletion } from './CourseCompletion';
import { EngagementMetrics } from './EngagementMetrics';
import { useInstructorAnalytics } from '@/hooks/use-instructor-analytics';

interface InstructorDashboardProps {
  courseId: string;
}

export function InstructorDashboard({ courseId }: InstructorDashboardProps) {
  const { 
    data, 
    isLoading, 
    error,
    courseStats,
    studentProgress,
    completionRates,
    engagementTrends
  } = useInstructorAnalytics(courseId);

  if (isLoading) return <div>Loading analytics...</div>;
  if (error) return <div>Error loading analytics: {error}</div>;

  const stats = [
    {
      title: "Total Students",
      value: courseStats.totalStudents,
      icon: Users,
      change: courseStats.studentGrowth,
    },
    {
      title: "Completion Rate",
      value: `${courseStats.completionRate}%`,
      icon: Trophy,
      change: courseStats.completionRateChange,
    },
    {
      title: "Average Progress",
      value: `${courseStats.averageProgress}%`,
      icon: BookOpen,
      change: courseStats.progressChange,
    },
    {
      title: "Avg. Time per Lesson",
      value: `${courseStats.averageTimePerLesson}min`,
      icon: Clock,
      change: courseStats.timeChange,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <h4 className="text-2xl font-bold mt-2">{stat.value}</h4>
                </div>
                <div className={`p-2 rounded-full ${
                  stat.change > 0 ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <stat.icon className={`w-5 h-5 ${
                    stat.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
              </div>
              <div className={`mt-2 text-sm ${
                stat.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change > 0 ? '+' : ''}{stat.change}% from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="progress">
        <TabsList>
          <TabsTrigger value="progress">Student Progress</TabsTrigger>
          <TabsTrigger value="completion">Completion Rates</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Student Progress Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={studentProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="averageProgress" 
                      stroke="#8884d8" 
                      name="Average Progress"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <StudentProgress 
                courseId={courseId} 
                students={data.students} 
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completion">
          <Card>
            <CardHeader>
              <CardTitle>Course Completion Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={completionRates}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="lesson" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="completionRate" 
                      fill="#82ca9d" 
                      name="Completion Rate (%)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <CourseCompletion 
                courseId={courseId}
                completionData={data.completion}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Student Engagement Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="activeUsers" 
                      stroke="#8884d8" 
                      name="Active Users"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="submissions" 
                      stroke="#82ca9d" 
                      name="Submissions"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <EngagementMetrics 
                courseId={courseId}
                engagementData={data.engagement}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}