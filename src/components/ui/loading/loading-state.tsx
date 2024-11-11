import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface LoadingStateProps {
  text?: string
  className?: string
}

export function LoadingState({ text = "Cargando...", className }: LoadingStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <LoadingSpinner />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}
