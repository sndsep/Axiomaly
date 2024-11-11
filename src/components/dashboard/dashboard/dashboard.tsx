// src/components/dashboard/dashboard.tsx
import React from 'react';
import { 
  Book, 
  Clock, 
  Trophy,
  BarChart,
  Calendar,
  PlayCircle,
  BookOpen,
  Timer,
  Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Progress } from '@/components/ui/forms/progress';
import { Button } from '@/components/ui/forms/button';

import type { 
  DashboardData, 
  StatsCardProps, 
  CourseProgressProps, 
  LearningPathProgressProps 
} from '@/types/dashboard';

// Components
const StatsCard = ({ title, value, icon: Icon, description }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      <Icon className="w-4 h-4 text-gray-500" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {description && (
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      )}
    </CardContent>
  </Card>
);

const CourseProgress = ({ course }: { course: Course }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <h3 className="font-semibold">{course.title}</h3>
        </div>
        <span className="text-sm text-gray-500">
          {course.completedLessons}/{course.totalLessons} lessons
        </span>
      </div>
      
      <Progress value={course.progress} className="h-2 mb-4" />
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          Last accessed: {course.lastAccessed}
        </span>
        <span className="flex items-center">
          <PlayCircle className="w-4 h-4 mr-1" />
          Next: {course.nextLesson}
        </span>
      </div>
    </CardContent>
  </Card>
);

const LearningPathProgress = ({ careerPath, currentLevel, progress }) => (
  <Card>
    <CardHeader>
      <CardTitle>Learning Path Progress</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">{careerPath}</span>
          <span className="text-sm text-gray-500">Level {currentLevel}</span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm">Current Milestone</span>
          </div>
          <div className="flex items-center space-x-2">
            <Timer className="w-4 h-4 text-green-500" />
            <span className="text-sm">On Track</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Dashboard Component
const Dashboard = ({ courses, stats, learningPath }: DashboardData) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Welcome to VFX Academy!</h2>
        <p className="text-gray-600 mb-6">You haven't enrolled in any courses yet.</p>
        <Button asChild>
          <a href="/courses">Browse Courses</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-gray-500">Continue your VFX learning journey</p>
        </div>
        <Button className="flex items-center">
          <PlayCircle className="w-4 h-4 mr-2" />
          Resume Learning
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard
          title="Hours Learned"
          value={stats.totalHoursLearned}
          icon={Clock}
          description="Total learning time"
        />
        <StatsCard
          title="Courses in Progress"
          value={stats.coursesInProgress}
          icon={Book}
          description="Active courses"
        />
        <StatsCard
          title="Completed Courses"
          value={stats.completedCourses}
          icon={Trophy}
          description="Finished courses"
        />
        <StatsCard
          title="Achievements"
          value={stats.totalAchievements}
          icon={Award}
          description="Earned badges and certificates"
        />
      </div>

      {/* Learning Path Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Current Courses</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <CourseProgress key={course.id} course={course} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Learning Path</h2>
          <LearningPathProgress {...learningPath} />
        </div>
      </div>

      {/* Upcoming Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>Next live session: Introduction to Particle Systems</span>
              <span className="text-gray-500">Tomorrow, 2:00 PM</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;