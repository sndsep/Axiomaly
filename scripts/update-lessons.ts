import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function updateLessons() {
  try {
    // Actualizar todas las lecciones sin courseId
    const result = await prisma.lesson.updateMany({
      where: {
        courseId: {
          equals: null
        }
      },
      data: {
        courseId: 'cm3zzweos0000eooiubc8vgt9'
      }
    })
    
    console.log(`Actualizado ${result.count} lecciones`)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateLessons() 