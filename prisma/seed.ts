// prisma/seed.ts

import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function cleanDatabase() {
  // Eliminar registros en orden para respetar las restricciones de clave foránea
  await prisma.activity.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.course.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()
}

async function main() {
  console.log('🧹 Limpiando base de datos...')
  await cleanDatabase()
  console.log('✨ Base de datos limpia')

  // Crear usuario admin
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      hashedPassword: await hash('password123', 12),
      role: 'ADMIN',
    },
  })
  console.log('👤 Admin creado')

  // Crear instructor
  const instructor = await prisma.user.create({
    data: {
      email: 'instructor@example.com',
      name: 'Test Instructor',
      hashedPassword: await hash('password123', 12),
      role: 'INSTRUCTOR',
    },
  })
  console.log('👨‍🏫 Instructor creado')

  // Crear estudiante
  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      hashedPassword: await hash('password123', 12),
      role: 'STUDENT',
    },
  })
  console.log('🎓 Estudiante creado')

  // Crear cursos
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: 'Introducción a JavaScript',
        description: 'Aprende los fundamentos de JavaScript desde cero',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'Guía de JavaScript',
              description: 'Manual completo de JavaScript',
              url: '/resources/js-guide.pdf',
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: 'React Avanzado',
        description: 'Domina React y sus patrones avanzados',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'Patrones en React',
              description: 'Guía de patrones avanzados',
              url: '/resources/react-patterns.pdf',
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: 'Node.js para Principiantes',
        description: 'Construye aplicaciones backend con Node.js',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'Node.js Basics',
              description: 'Fundamentos de Node.js',
              url: '/resources/nodejs-basics.pdf',
            }
          ]
        }
      },
    }),
  ])
  console.log('📚 Cursos creados')

  // Crear matrículas
  await Promise.all(courses.map(course => 
    prisma.enrollment.create({
      data: {
        userId: student.id,
        courseId: course.id,
        status: Math.random() > 0.5 ? 'COMPLETED' : 'IN_PROGRESS',
      }
    })
  ))
  console.log('📝 Matrículas creadas')

  // Crear actividades
  await Promise.all([
    prisma.activity.create({
      data: {
        userId: student.id,
        description: 'Completó el módulo 1 de JavaScript',
      }
    }),
    prisma.activity.create({
      data: {
        userId: student.id,
        description: 'Comenzó el curso de React Avanzado',
      }
    }),
    prisma.activity.create({
      data: {
        userId: student.id,
        description: 'Descargó recursos de Node.js',
      }
    }),
  ])
  console.log('📊 Actividades creadas')

  console.log('✅ Seed completado!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
