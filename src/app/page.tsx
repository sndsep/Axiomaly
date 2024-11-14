// src/app/page.tsx
import React from 'react';
import { Metadata } from 'next';

// Import components
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { CourseSearch } from '@/components/landing/CourseSearch';
import { CareerPath } from '@/components/landing/CareerPath';
import { ExpertsSection } from '@/components/landing/ExpertsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { StudentProjects } from '@/components/landing/StudentProjects';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'VFX Academy - Master Visual Effects',
  description: 'Learn VFX from industry experts through short courses and comprehensive degree programs.',
}

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