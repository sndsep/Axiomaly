// src/components/courses/analytics/StudentProgressAnalytics.tsx
'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs'
import { Badge } from '@/components/ui/forms/badge'
import { 
  Trophy,
  Clock,
  Calendar,
  BarChart,
  Activity,
  BookOpen,
  CheckCircle,
  FileText
} from 'lucide-react'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

interface ActivityItem {
  id: string
  title: string
  time: string
  type: 'assignment' | 'lesson' | 'project' | 'quiz'
}

interface ProgressAnalyticsProps {
  studentId?: string
  courseId?: string
}

export function StudentProgressAnalytics({ studentId, courseId }: ProgressAnalyticsProps) {
  // This would come from your API/database
  const progressData = [
    { week: 'Week 1', progress: 20 },
    { week: 'Week 2', progress: 35 },
    { week: 'Week 3', progress: 45 },
    { week: 'Week 4', progress: 60 },
    { week: 'Week 5', progress: 75 },
    { week: 'Week 6', progress: 85 }
  ]

  const completionData = [
    { name: 'Completed', value: 75 },
    { name: 'In Progress', value: 15 },
    { name: 'Not Started', value: 10 }
  ]

  const stats = [
    {
      title: "Course Progress",
      value: "75%",
      icon: Trophy,
      description: "Overall completion rate"
    },
    {
      title: "Time Spent",
      value: "32h",
      icon: Clock,
      description: "Total learning hours"
    },
    {
      title: "Streak",
      value: "12",
      icon: Calendar,
      description: "Days of continuous learning"
    },
    {
      title: "Assignments",
      value: "8/10",
      icon: BarChart,
      description: "Completed assignments"
    }
  ]

  const recentActivities: ActivityItem[] = [
    { 
      id: '1',
      title: "Completed Assignment 3", 
      time: "2 hours ago", 
      type: "assignment" 
    },
    { 
      id: '2',
      title: "Watched Lesson 5", 
      time: "4 hours ago", 
      type: "lesson" 
    },
    { 
      id: '3',
      title: "Submitted Project", 
      time: "1 day ago", 
      type: "project" 
    },
    { 
      id: '4',
      title: "Completed Quiz 2", 
      time: "2 days ago", 
      type: "quiz" 
    }
  ]

  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'assignment':
        return FileText
      case 'lesson':
        return BookOpen
      case 'project':
        return Activity
      case 'quiz':
        return CheckCircle
      default:
        return Activity
    }
  }

  const getActivityColor = (type: ActivityItem['type']) => {
    switch (type) {
      case 'assignment':
        return 'bg-blue-100 text-blue-800'
      case 'lesson':
        return 'bg-green-100 text-green-800'
      case 'project':
        return 'bg-purple-100 text-purple-800'
      case 'quiz':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                </div>
                <div className="mt-2">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="progress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="progress">Progress Timeline</TabsTrigger>
          <TabsTrigger value="completion">Completion Status</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="progress"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completion">
          <Card>
            <CardHeader>
              <CardTitle>Course Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={completionData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {completionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-center gap-4">
                {completionData.map((item, index) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = getActivityIcon(activity.type)
              return (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {activity.type}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default StudentProgressAnalytics