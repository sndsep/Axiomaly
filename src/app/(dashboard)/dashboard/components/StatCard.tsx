// src/app/(dashboard)/dashboard/components/StatCard.tsx
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  FileText,
  LucideIcon 
} from "lucide-react"
import { cn } from "@/lib/utils"

type IconType = "BookOpen" | "Clock" | "CheckCircle" | "FileText";

const icons: Record<IconType, LucideIcon> = {
  BookOpen,
  Clock,
  CheckCircle,
  FileText
}

interface StatCardProps {
  title: string
  value: string
  icon: IconType
  className?: string
}

export function StatCard({
  title,
  value,
  icon,
  className,
}: StatCardProps) {
  const Icon = icons[icon]

  return (
    <div className={cn(
      "rounded-lg border bg-card p-6 hover:shadow-md transition-shadow",
      className
    )}>
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  )
}