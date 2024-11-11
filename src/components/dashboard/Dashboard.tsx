// src/components/dashboard/Dashboard.tsx

import React from 'react';
import { 
  BookOpen, 
  Clock, 
  BarChart, 
  Calendar,
  Users,
  MessageSquare,
  Folder,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Progress } from '@/components/ui/forms/progress';
import { Button } from '@/components/ui/forms/button';

const Dashboard = ({ courses, stats, learningPath }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Center Column */}
      <div className="md:col-span-2 space-y-6">
        {/* Overall Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Course Completion</span>
                  <span>{stats.coursesInProgress} in progress</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-sm">
                  <p className="text-gray-500">Hours Learned</p>
                  <p className="text-2xl font-bold">{stats.totalHoursLearned}</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">Completed Courses</p>
                  <p className="text-2xl font-bold">{stats.completedCourses}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Course */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Current Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            {courses[0] ? (
              <div className="space-y-4">
                <h3 className="font-semibold">{courses[0].title}</h3>
                <Progress value={courses[0].progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Next: {courses[0].nextLesson}</span>
                  <span>{courses[0].progress}% Complete</span>
                </div>
                <Button className="w-full">Continue Learning</Button>
              </div>
            ) : (
              <p className="text-gray-500">No active courses</p>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add your deadlines list here */}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add your activity list here */}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Program Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Program Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">{learningPath.careerPath}</p>
                <p className="text-sm text-gray-500">Level {learningPath.currentLevel}</p>
              </div>
              <Progress value={learningPath.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Mentorship */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Mentorship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add your mentorship section here */}
              <Button className="w-full">Schedule Session</Button>
            </div>
          </CardContent>
        </Card>

        {/* Discussion Forums */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Discussion Forums
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add your forums section here */}
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add your resources section here */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;