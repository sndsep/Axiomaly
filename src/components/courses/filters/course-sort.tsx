// src/components/courses/filters/course-sort.tsx
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/forms/select";

export type SortOption = "recent" | "popular" | "rating" | "price-low" | "price-high";

interface CourseSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function CourseSort({ value, onChange }: CourseSortProps) {
  return (
    <Select value={value} onValueChange={(value) => onChange(value as SortOption)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// src/components/courses/stats/course-stats.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { Users, Clock, Award, Star, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/forms/progress";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  progress?: number;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
}

function StatsCard({ title, value, icon, description, progress, trend }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {progress !== undefined && (
          <Progress value={progress} className="h-2 mt-2" />
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className={`text-xs mt-1 ${
            trend.positive ? 'text-green-500' : 'text-red-500'
          }`}>
            {trend.positive ? '↑' : '↓'} {trend.value}% {trend.label}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface CourseStatsProps {
  stats: {
    totalEnrollments: number;
    averageProgress: number;
    completionRate: number;
    averageRating: number;
    totalHours: number;
    totalCourses: number;
    trends?: {
      enrollments?: number;
      completion?: number;
      rating?: number;
    };
  };
}

export function CourseStats({ stats }: CourseStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard
        title="Total Enrollments"
        value={stats.totalEnrollments.toLocaleString()}
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        progress={stats.averageProgress}
        description={`${stats.averageProgress}% average progress`}
        trend={stats.trends?.enrollments ? {
          value: stats.trends.enrollments,
          label: "vs last month",
          positive: stats.trends.enrollments > 0
        } : undefined}
      />

      <StatsCard
        title="Course Completion"
        value={`${stats.completionRate}%`}
        icon={<Award className="h-4 w-4 text-muted-foreground" />}
        progress={stats.completionRate}
        description="completion rate"
        trend={stats.trends?.completion ? {
          value: stats.trends.completion,
          label: "vs last month",
          positive: stats.trends.completion > 0
        } : undefined}
      />

      <StatsCard
        title="Total Time"
        value={`${stats.totalHours}h`}
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        description="of content"
      />
    </div>
  );
}

// src/components/courses/course-dashboard.tsx
import { useState } from "react";
import { CourseGrid } from "./list/course-grid";
import { CourseFilters } from "./filters/course-filters";
import { CourseSort, type SortOption } from "./filters/course-sort";
import { CourseStats } from "./stats/course-stats";
import { useCourseManagement } from "@/hooks/use-course-management";
import { Button } from "@/components/ui/forms/button";
import { useRouter } from "next/navigation";
import type { CourseFilters as Filters } from "@/types/course";

interface CourseDashboardProps {
  initialFilters?: Partial<Filters>;
  showStats?: boolean;
  variant?: "full" | "preview";
}

export function CourseDashboard({ 
  initialFilters,
  showStats = true,
  variant = "full" 
}: CourseDashboardProps) {
  const router = useRouter();
  const { useCoursesStats } = useCourseManagement();
  const [filters, setFilters] = useState<Filters>({
    search: "",
    level: "all",
    category: "all",
    sort: "recent",
    page: 1,
    pageSize: 9,
    ...initialFilters
  });

  const { data: stats } = useCoursesStats();

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      page: 1 // Reset page when filters change
    }));
  };

  const handleSortChange = (sort: SortOption) => {
    handleFilterChange({ sort });
  };

  const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <div className="space-y-8">
      {showStats && stats && (
        <CourseStats stats={stats} />
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CourseFilters
          onFilterChange={handleFilterChange}
          categories={[]} // Pass your categories here
        />
        <div className="flex items-center gap-4">
          <CourseSort
            value={filters.sort || "recent"}
            onChange={handleSortChange}
          />
        </div>
      </div>

      <CourseGrid
        filters={filters}
        variant={variant}
        onCourseClick={handleCourseClick}
      />
    </div>
  );
}