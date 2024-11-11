// src/components/landing/CareerPath.tsx
import React from 'react';
import { 
  Rocket, 
  GraduationCap, 
  Clock, 
  Target, 
  Users,
  BookOpen,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';

export function CareerPath() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-xl text-gray-600">Select the journey that best fits your goals</p>
        </div>

        <div className="relative">
          {/* Línea conectora central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="grid md:grid-cols-2 gap-16 relative">
            {/* Ruta Curso Corto */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Short Course</h3>
                <p className="text-gray-600 mt-2">Master specific skills fast</p>
              </div>

              <Card className="bg-white border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Duration</h4>
                        <p className="text-gray-600">1-3 months per course</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Focus</h4>
                        <p className="text-gray-600">Specific VFX skills</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Outcome</h4>
                        <p className="text-gray-600">Course certificates</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Explore Short Courses
              </Button>
            </div>

            {/* Ruta Programa Completo */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600">Degree Program</h3>
                <p className="text-gray-600 mt-2">Become a complete VFX artist</p>
              </div>

              <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Duration</h4>
                        <p className="text-gray-600">12-24 months program</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Focus</h4>
                        <p className="text-gray-600">Complete VFX education</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Outcome</h4>
                        <p className="text-gray-600">Professional degree</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Explore Degree Program
              </Button>
            </div>
          </div>

          {/* Sección de ayuda */}
          <div className="mt-16 text-center">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Need Help Deciding?</h3>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Talk to Advisor
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Compare Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}