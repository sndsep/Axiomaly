// src/components/courses/discovery/CourseList.tsx
import { useState } from 'react'
import { 
    Search,
    Filter,
    SortAsc,
    Grid,
    List
  } from 'lucide-react'
  import { Button } from '@/components/ui/forms/button'
  import { Input } from '@/components/ui/forms/input'
  import { Card, CardContent } from '@/components/ui/forms/card'
  import { Select } from '@/components/ui/forms/select'
  
  export default function CourseList() {
    const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('newest')
    
    return (
      <div className="w-full space-y-4">
        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-2">
            <Select 
              value={sortBy}
              onValueChange={setSortBy}
              className="w-40"
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </Select>
  
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
  
            <div className="border-l pl-2 flex gap-1">
              <Button
                variant={viewType === 'grid' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewType('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewType === 'list' ? 'default' : 'ghost'}
                size="icon" 
                onClick={() => setViewType('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
  
        {/* Course Grid */}
        <div className={`grid gap-6 ${
          viewType === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {Array.from({length: 6}).map((_, i) => (
            <Card key={i} className={viewType === 'list' ? 'flex' : ''}>
              <div className={`relative ${
                viewType === 'list' ? 'w-72' : 'w-full pt-[56.25%]'
              }`}>
                <img
                  src="/api/placeholder/400/225"
                  alt="Course thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className={`p-4 ${viewType === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Introduction to VFX</h3>
                    <p className="text-sm text-muted-foreground">Learn the basics of visual effects</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enroll
                  </Button>
                </div>
                
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div>12 weeks</div>
                  <div>Beginner</div>
                  <div>4.5 ★</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center gap-1 py-4">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          {[1, 2, 3].map(page => (
            <Button
              key={page}
              variant={page === 1 ? 'default' : 'outline'}
              size="sm"
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    )
  }