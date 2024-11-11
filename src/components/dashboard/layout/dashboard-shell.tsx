// src/components/dashboard/layout/dashboard-shell.tsx
interface DashboardShellProps {
    children: React.ReactNode
    header?: React.ReactNode
  }
  
  export function DashboardShell({ children, header }: DashboardShellProps) {
    return (
      <div className="flex-1 space-y-4 p-8">
        {header && (
          <div className="flex items-center justify-between">
            {header}
          </div>
        )}
        <div className="flex-1">{children}</div>
      </div>
    )
  }
  
  // src/components/dashboard/layout/dashboard-header.tsx
  export function DashboardHeader({
    heading,
    text,
    children,
  }: {
    heading: string
    text?: string
    children?: React.ReactNode
  }) {
    return (
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-wide">{heading}</h1>
          {text && <p className="text-muted-foreground">{text}</p>}
        </div>
        {children}
      </div>
    )
  }