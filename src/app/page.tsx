// src/app/page.tsx
import React from 'react';
import { 
  Search,
  Check,
  Award, 
  Users, 
  Clock, 
  Monitor,
  Rocket,
  GraduationCap,
  Target,
  Trophy,
  BookOpen
} from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/forms/button';
import { Input } from '@/components/ui/forms/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Badge } from '@/components/ui/forms/badge';

// import components
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { CourseSearch } from '@/components/landing/CourseSearch';
import { CareerPath } from '@/components/landing/CareerPath';
import { ExpertsSection } from '@/components/landing/ExpertsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { StudentProjects } from '@/components/landing/StudentProjects';
import { Footer } from '@/components/landing/Footer';

/**
 * Landing Page Component
 * The main entry point of the VFX Academy website
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CourseSearch />
        <CareerPath />
        <ExpertsSection />
        <PricingSection />
        <WhyChooseUs />
        <StudentProjects />
      </main>
      <Footer />
    </div>
  );
}