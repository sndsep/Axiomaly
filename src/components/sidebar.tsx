import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/forms/button"
import { LucideIcon } from "lucide-react"

interface SidebarProps {
  items: {
    title: string
    icon: LucideIcon
    href: string
    section: string
  }[]
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ items, activeSection, onSectionChange }: SidebarProps) {
  const router = useRouter()

  const handleItemClick = (href: string, section: string) => {
    router.push(href)
    onSectionChange(section)
  }

  return (
    <div className="flex flex-col h-full bg-white border-r">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 space-y-1">
          {items.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                activeSection === item.section && "bg-muted"
              )}
              onClick={() => handleItemClick(item.href, item.section)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
} 