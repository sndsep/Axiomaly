// prisma/seed.js
// This file is used to seed the database with initial data for development purposes.


const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function cleanDatabase() {
  // Delete records in order to respect foreign key constraints
  await prisma.studentProgress.deleteMany()
  await prisma.activity.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.course.deleteMany()
  await prisma.onboardingProgress.deleteMany()
  await prisma.userPreferences.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()
  await prisma.deadline.deleteMany()
}

async function main() {
  console.log('🧹 Cleaning database...')
  await cleanDatabase()
  console.log('✨ Database clean')

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
      hashedPassword: await bcrypt.hash('admin123', 12),
      role: "ADMIN",
      preferences: {
        create: {
          emailNotifications: true,
          preferredTags: ["VFX", "Administration"]
        }
      },
      onboardingProgress: {
        create: {
          completed: true,
          currentStep: "CAREER_PATH",
          responses: {}
        }
      },
    }
  });
  console.log('👤 Admin created')

  // Create instructor
  const instructor = await prisma.user.create({
    data: {
      email: 'instructor@example.com',
      name: 'Test Instructor',
      hashedPassword: await bcrypt.hash('instructor123', 12),
      role: 'INSTRUCTOR',
      careerPath: 'SHORT_COURSE',
      preferences: {
        create: {
          emailNotifications: true,
          preferredTags: ['3D Modeling', 'Animation'],
        }
      },
      onboardingProgress: {
        create: {
          completed: true,
          currentStep: "CAREER_PATH",
          responses: {}
        }
      }
    },
  })
  console.log('👨‍🏫 Instructor created')

  // Create a test lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: 'Introduction to VFX',
    }
  })
  console.log('📚 Lesson created')

  // Create test courses
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: '3D Modeling Fundamentals',
        description: 'Learn the basics of 3D modeling',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: '3D Modeling Guide',
              description: 'Comprehensive guide to 3D modeling',
              url: '/resources/modeling-guide.pdf',
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: 'Advanced Animation Techniques',
        description: 'Master character animation',
        instructorId: instructor.id,
        resources: {
          create: [
            {
              title: 'Animation Reference Library',
              description: 'Collection of animation references',
              url: '/resources/animation-refs.zip',
            }
          ]
        }
      },
    }),
  ])
  console.log('📚 Courses created')

  // Create student
  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      hashedPassword: await bcrypt.hash('student123', 12),
      role: 'STUDENT',
      careerPath: 'DEGREE_PROGRAM',
      preferences: {
        create: {
          emailNotifications: true,
          weeklyGoal: 10,
          preferredTags: ['3D Modeling', 'VFX'],
        }
      },
      onboardingProgress: {
        create: {
          currentStep: "CAREER_PATH",
          completed: false,
          responses: {}
        }
      },
      enrollments: {
        create: courses.map(course => ({
          courseId: course.id,
          lessonId: lesson.id,
          status: 'ACTIVE',
        }))
      },
      activities: {
        create: [
          {
            description: 'Started 3D Modeling course',
          },
          {
            description: 'Completed first assignment',
          }
        ]
      }
    },
  })
  console.log('🎓 Student with enrollments and activities created')

  await Promise.all(courses.map(course => {
    return prisma.studentProgress.create({
      data: {
        userId: student.id,
        courseId: course.id,
        progress: 0,
        lastUpdated: new Date(),
      },
    });
  }));

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