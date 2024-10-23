// prisma/seed.ts
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  // Crear algunos cursos de prueba
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: "Introducción a React",
        description: "Aprende los fundamentos de React",
        thumbnail: "/api/placeholder/400/320"
      }
    }),
    prisma.course.create({
      data: {
        title: "Node.js Avanzado",
        description: "Desarrollo backend con Node.js",
        thumbnail: "/api/placeholder/400/320"
      }
    }),
    prisma.course.create({
      data: {
        title: "TypeScript Fundamentos",
        description: "Bases de TypeScript",
        thumbnail: "/api/placeholder/400/320"
      }
    })
  ])

  console.log('Cursos creados:', courses)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })