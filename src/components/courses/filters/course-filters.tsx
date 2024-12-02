// components/courses/course-filters.tsx
import { zodResolver } from "@hookform/resolve-zodform";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/forms/select";
import { Input } from "@/components/ui/forms/input";
import { Button } from "@/components/ui/forms/button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/forms/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { CourseLevel } from "@/types/course";

const filterSchema = z.object({
  search: z.string().optional(),
  level: z.enum(["all", "beginner", "intermediate", "advanced"]).optional(),
  category: z.string().optional(),
  sort: z.enum(["recent", "popular", "rating"]).optional(),
});

type FilterValues = z.infer<typeof filterSchema>;

interface CourseFiltersProps {
  categories: Array<{ id: string; name: string }>;
  onFilterChange: (values: FilterValues) => void;
  initialValues?: Partial<FilterValues>;
}

export function CourseFilters({
  categories,
  onFilterChange,
  initialValues = {},
}: CourseFiltersProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      search: "",
      level: "all",
      category: "all",
      sort: "recent",
      ...initialValues,
    },
  });

  const handleSubmit = (values: FilterValues) => {
    onFilterChange(values);
  };

  const resetFilters = () => {
    form.reset({
      search: "",
      level: "all",
      category: "all",
      sort: "recent",
    });
    handleSubmit(form.getValues());
  };

  const FilterContent = () => (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="space-y-4"
    >
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          className="pl-9"
          {...form.register("search")}
        />
      </div>

      <div className="space-y-4">
        <Select
          onValueChange={(value) => {
            form.setValue("level", value as CourseLevel);
            handleSubmit(form.getValues());
          }}
          value={form.watch("level")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => {
            form.setValue("category", value);
            handleSubmit(form.getValues());
          }}
          value={form.watch("category")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value: string) => {
            form.setValue("sort", value as "recent" | "popular" | "rating");
            handleSubmit(form.getValues());
          }}
          value={form.watch("sort")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={resetFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Reset Filters
        </Button>
      </div>
    </form>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Course Filters</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    );
  }

  return <FilterContent />;
}