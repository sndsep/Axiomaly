// src/components/landing/StudentProjects.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/forms/card"
import { Badge } from "@/components/ui/forms/badge"

const projects = [
  {
    id: "1",
    title: "Character Animation Showcase",
    student: "Alex Johnson",
    image: "/api/placeholder/400/300",
    category: "Animation",
    likes: 234
  },
  {
    id: "2",
    title: "Sci-Fi Environment Design",
    student: "Maria Garcia",
    image: "/api/placeholder/400/300",
    category: "3D Modeling",
    likes: 186
  },
  {
    id: "3",
    title: "VFX Compositing Reel",
    student: "James Wilson",
    image: "/api/placeholder/400/300",
    category: "Compositing",
    likes: 342
  }
]

export function StudentProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Student Showcase</h2>
          <p className="text-lg text-gray-600">
            Amazing work from our talented students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-4 right-4">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">by {project.student}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{project.likes} likes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}