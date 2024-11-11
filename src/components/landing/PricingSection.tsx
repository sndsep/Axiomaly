// src/components/landing/PricingSection.tsx

"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/forms/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card"
import { cn } from "@/lib/utils"

interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
}

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 29,
    description: "Perfect for beginners",
    features: [
      "Access to basic courses",
      "Community support",
      "Course completion certificates",
      "24/7 support"
    ]
  },
  {
    id: "pro",
    name: "Professional",
    price: 79,
    description: "For serious learners",
    features: [
      "All Basic features",
      "Advanced courses access",
      "1-on-1 mentoring sessions",
      "Project reviews",
      "Career guidance"
    ],
    isPopular: true
  },
  // Add more plans...
]

export function PricingSection() {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that's right for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={cn(
                "relative",
                plan.isPopular && "border-2 border-primary shadow-lg"
              )}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Popular
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-gray-600">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
