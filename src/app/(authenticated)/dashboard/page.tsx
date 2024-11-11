"use client";

// src/app/(authenticated)/dashboard/page.tsx
import OverallProgress from "@/components/dashboard/progress/OverallProgress";
import { ProgramOverview } from "@/components/dashboard/program/ProgramOverview";
import CurrentCourse from "@/components/dashboard/course/CurrentCourse";
import UpcomingDeadlines from "@/components/dashboard/deadlines/UpcomingDeadlines";
import RecentActivity from "@/components/dashboard/activity/RecentActivity";
import Mentorship from "@/components/dashboard/mentorship/Mentorship";
import DiscussionForums from "@/components/dashboard/forums/DiscussionForums";
import Resources from "@/components/dashboard/resources/Resources";

const DashboardPage = () => {
  return (
      <div className="flex space-x-4"> {/* Flex container for columns */}
          <div className="flex-1"> {/* First column */}
              <OverallProgress />
              <CurrentCourse />
              <UpcomingDeadlines />
              <RecentActivity />
          </div>
          <div className="w-1/3"> {/* Second column */}
              <ProgramOverview />
              <Mentorship />
              <DiscussionForums />
              <Resources />
          </div>
      </div>
  );
};

export default DashboardPage;