// src/components/ui/placeholder-image.tsx

import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  width?: number
  height?: number
  className?: string
}

export function PlaceholderImage({ 
  width = 400, 
  height = 300,
  className 
}: PlaceholderImageProps) {
  return (
    <div 
      className={cn(
        "bg-muted flex items-center justify-center",
        className
      )} 
      style={{ 
        width, 
        height,
        minWidth: width,
        minHeight: height
      }}
    >
      <span className="text-muted-foreground text-sm">
        {width} × {height}
      </span>
    </div>
  )
}