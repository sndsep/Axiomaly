// prisma/seed.ts

import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function cleanDatabase() {
  // Delete records in order to respect foreign key constraints
  await prisma.activity.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.course.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()
}

async function main() {
  console.log('🧹 Cleaning database...')
  await cleanDatabase()
  console.log('✨ Database clean')

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      hashedPassword: await hash('password123', 12), // Hash the password 'password123'
      role: 'ADMIN',
    },
  })
  console.log('👤 Admin created')

  // Create instructor
  const instructor = await prisma.user.create({
    data: {
      email: 'instructor@example.com',
      name: 'Test Instructor',
      hashedPassword: await hash('password123', 12),
      role: 'INSTRUCTOR',
    },
  })
  console.log('👨‍🏫 Instructor created')

  // Create student
  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      hashedPassword: await hash('password123', 12),
      role: 'STUDENT',
    },
  })
  console.log('🎓 Student created')

  // Create courses
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: 'Introduction to JavaScript',
        description: 'Learn JavaScript fundamentals from scratch',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'JavaScript Guide',
              description: 'Complete JavaScript manual',
              url: '/resources/js-guide.pdf',
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: 'Advanced React',
        description: 'Master React and its advanced patterns',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'React Patterns',
              description: 'Guide to advanced patterns',
              url: '/resources/react-patterns.pdf',
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: 'Node.js for Beginners',
        description: 'Build backend applications with Node.js',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'Node.js Basics',
              description: 'Node.js fundamentals',
              url: '/resources/nodejs-basics.pdf',
            }
          ]
        }
      },
    }),
  ])
  console.log('📚 Courses created')

  // Create enrollments
  const lesson = await prisma.lesson.create({
    data: {
      title: 'Sample Lesson',
      // other fields as necessary
    }
  })

  await Promise.all(courses.map(course => 
    prisma.enrollment.create({
      data: {
        userId: student.id,
        courseId: course.id,
        lessonId: lesson.id, // Add the lessonId here
      }
    })
  ))
  console.log('📝 Enrollments created')

  // Create activities
  await Promise.all([
    prisma.activity.create({
      data: {
        userId: student.id,
        description: 'Completed JavaScript module 1',
      }
    }),
    prisma.activity.create({
      data: {
        userId: student.id,
        description: 'Started Advanced React course',
      }
    }),
    prisma.activity.create({
      data: {
        userId: student.id,
        description: 'Downloaded Node.js resources',
      }
    }),
  ])
  console.log('📊 Activities created')

  console.log('✅ Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
