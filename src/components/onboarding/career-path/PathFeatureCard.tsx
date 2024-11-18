// src/components/onboarding/career-path/PathFeatureCard.tsx
import { Card, CardContent } from "@/components/ui/forms/card"
import { LucideIcon } from "lucide-react"

interface PathFeatureProps {
  icon: LucideIcon
  title: string
  description: string
  color?: "blue" | "purple"
}

export function PathFeatureCard({ 
  icon: Icon,
  title, 
  description,
  color = "blue" 
}: PathFeatureProps) {
  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600"
  }

  return (
    <div className="flex items-start space-x-3">
      <div className={`flex-shrink-0 ${colorClasses[color]}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
