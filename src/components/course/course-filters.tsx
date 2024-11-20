"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/forms/input"
import { Button } from "@/components/ui/forms/button"
import { Search, Filter, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/forms/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/forms/sheet"
import { useMediaQuery } from '@/hooks/use-media-query'

interface CourseFiltersProps {
  onSearchChange: (search: string) => void
  onFilterChange: (filter: string) => void
  onSortChange: (sort: string) => void
  categories: Array<{ id: string; name: string }>
}

export function CourseFilters({
  onSearchChange,
  onFilterChange,
  onSortChange,
  categories
}: CourseFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const filters = (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar cursos..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      
      <Select onValueChange={onFilterChange}>
        <SelectTrigger>
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas las categorías</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={onSortChange}>
        <SelectTrigger>
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recent">Más recientes</SelectItem>
          <SelectItem value="popular">Más populares</SelectItem>
          <SelectItem value="rating">Mejor valorados</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>
          {filters}
        </SheetContent>
      </Sheet>
    )
  }

  return filters
}
