export interface DashboardMenuItem {
  name: string
  href: string
  icon?: string
  items?: DashboardMenuItem[]
}

export interface DashboardLayoutProps {
  children: React.ReactNode
}
