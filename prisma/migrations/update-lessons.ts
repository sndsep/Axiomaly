import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function updateLessons() {
  try {
    // Primero, obtener el ID de un curso existente
    const course = await prisma.course.findFirst()
    
    if (!course) {
      console.log('No hay cursos existentes. Creando uno nuevo...')
      const newCourse = await prisma.course.create({
        data: {
          title: "Curso por defecto",
          description: "Curso creado para migración",
          instructorId: "ID_DEL_INSTRUCTOR", // Necesitarás un instructor válido
          level: "BEGINNER"
        }
      })
      console.log('Curso creado con ID:', newCourse.id)
      
      // Actualizar todas las lecciones sin curso
      await prisma.lesson.updateMany({
        where: {
          courseId: null
        },
        data: {
          courseId: newCourse.id
        }
      })
    } else {
      console.log('Usando curso existente con ID:', course.id)
      
      // Actualizar todas las lecciones sin curso
      await prisma.lesson.updateMany({
        where: {
          courseId: null
        },
        data: {
          courseId: course.id
        }
      })
    }
    
    console.log('Actualización completada')
  } catch (error) {
    console.error('Error durante la actualización:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateLessons() 