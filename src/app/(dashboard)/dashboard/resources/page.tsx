import { db } from "@/lib/db"
import { ResourceCard } from "./components/resource-card"

export default async function ResourcesPage() {
  try {
    const resources = await db.resource.findMany({
      include: {
        course: true
      }
    })

    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Resources</h1>
        </div>
        
        {resources.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground">No resources found.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching resources:", error)
    return (
      <div className="container mx-auto p-6">
        <p className="text-red-500">Error loading resources. Please try again later.</p>
      </div>
    )
  }
}