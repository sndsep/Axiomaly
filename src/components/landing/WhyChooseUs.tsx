// src/components/landing/WhyChooseUs.tsx
import { Card, CardContent } from "@/components/ui/forms/card"
import { 
  Award, 
  Users, 
  Clock, 
  Monitor,
  type LucideIcon 
} from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: "Industry Expert Instructors",
    description: "Learn from professionals with years of experience in top studios",
    icon: Users
  },
  {
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to all courses",
    icon: Clock
  },
  {
    title: "Professional Certification",
    description: "Earn recognized certificates upon course completion",
    icon: Award
  },
  {
    title: "Hands-on Projects",
    description: "Build your portfolio with real-world VFX projects",
    icon: Monitor
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose VFX Academy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the tools, knowledge, and support you need to succeed in the VFX industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="text-center pt-6">
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
