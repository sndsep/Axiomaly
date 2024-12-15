// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function cleanDatabase() {
  console.log('🧹 Cleaning database...')
  
  await prisma.lessonProgress.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.studentProgress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.prerequisite.deleteMany()
  await prisma.curriculum.deleteMany()
  await prisma.deadline.deleteMany()
  await prisma.course.deleteMany()
  await prisma.category.deleteMany()
  await prisma.specialization.deleteMany()
  await prisma.surveyResponse.deleteMany()
  await prisma.activity.deleteMany()
  await prisma.review.deleteMany()
  await prisma.onboardingProgress.deleteMany()
  await prisma.userPreferences.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()
  
  console.log('Database cleaned successfully')
}

async function main() {
  try {
    await cleanDatabase()
    console.log('✨ Database clean')

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: "admin@example.com",
        name: "Admin User",
        displayName: "Admin",
        hashedPassword: await bcrypt.hash('admin123', 12),
        role: "ADMIN",
      },
    })
    console.log('👤 Admin created')

    // Create instructor
    const instructor = await prisma.user.create({
      data: {
        email: 'instructor@example.com',
        name: 'Test Instructor',
        displayName: 'Instructor',
        hashedPassword: await bcrypt.hash('instructor123', 12),
        role: 'INSTRUCTOR',
        careerPath: 'SHORT_COURSE',
      },
    })
    console.log('👨‍🏫 Instructor created')

    // Create categories
    const category1 = await prisma.category.create({
      data: {
        name: '3D Modeling',
      },
    })

    const category2 = await prisma.category.create({
      data: {
        name: 'Animation',
      },
    })
    console.log('📝 Categories created')

    // Create specialization
    const specialization = await prisma.specialization.create({
      data: {
        name: 'Character Animation',
        description: 'Master the art of character animation',
      },
    })
    console.log('📚 Specializations created')

    // Create courses with lessons and deadlines
    const course1 = await prisma.course.create({
      data: {
        title: '3D Modeling Fundamentals',
        description: 'Learn the basics of 3D modeling',
        instructorId: instructor.id,
        categoryId: category1.id,
        level: 'BEGINNER',
        duration: '8 weeks',
        price: 99.99,
        thumbnail: '/thumbnails/3d-modeling.jpg',
        lessons: {
          create: [
            {
              title: 'Introduction to 3D Modeling',
              description: 'Learn the basics of 3D modeling software',
              content: 'Welcome to the course...',
              type: 'VIDEO',
              order: 0,
              duration: 30,
            },
            {
              title: 'Basic Shapes and Tools',
              description: 'Understanding fundamental 3D shapes',
              content: 'In this lesson...',
              type: 'VIDEO',
              order: 1,
              duration: 45,
            },
          ],
        },
      },
    })

    // Create deadlines for course 1
    await prisma.deadline.createMany({
      data: [
        {
          name: '3D Modeling Project 1',
          description: 'Create a basic 3D model',
          dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          type: 'PROJECT',
          courseId: course1.id,
          userId: instructor.id
        },
        {
          name: 'Weekly Quiz',
          description: 'Complete the weekly assessment',
          dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          type: 'QUIZ',
          courseId: course1.id,
          userId: instructor.id
        }
      ]
    })

    const course2 = await prisma.course.create({
      data: {
        title: 'Advanced Animation Techniques',
        description: 'Master character animation',
        instructorId: instructor.id,
        categoryId: category2.id,
        level: 'ADVANCED',
        duration: '12 weeks',
        price: 149.99,
        thumbnail: '/thumbnails/animation.jpg',
        lessons: {
          create: [
            {
              title: 'Advanced Character Rigging',
              description: 'Master character rigging techniques',
              content: 'In this advanced lesson...',
              type: 'VIDEO',
              order: 0,
              duration: 60,
            },
            {
              title: 'Animation Principles',
              description: 'Understanding advanced animation principles',
              content: 'Today we will explore...',
              type: 'VIDEO',
              order: 1,
              duration: 45,
            },
          ],
        },
      },
    })

    // Create deadlines for course 2
    await prisma.deadline.createMany({
      data: [
        {
          name: 'Character Animation Demo',
          description: 'Submit your character animation',
          dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          type: 'PROJECT',
          courseId: course2.id,
          userId: instructor.id
        },
        {
          name: 'Mid-term Assignment',
          description: 'Complete the mid-term project',
          dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          type: 'ASSIGNMENT',
          courseId: course2.id,
          userId: instructor.id
        }
      ]
    })

    console.log('📚 Courses, lessons, and deadlines created')

    // Create student
    const student = await prisma.user.create({
      data: {
        email: 'student@example.com',
        name: 'Test Student',
        displayName: 'Student',
        hashedPassword: await bcrypt.hash('student123', 12),
        role: 'STUDENT',
        careerPath: 'DEGREE_PROGRAM',
      },
    })
    console.log('🎓 Student created')

    // Create student preferences
    await prisma.userPreferences.create({
      data: {
        userId: student.id,
        emailNotifications: true,
        weeklyGoal: 10,
        preferredTags: ['3D Modeling', 'VFX'],
        courseUpdates: true,
        marketingEmails: true,
      },
    })

    // Create enrollments
    await prisma.enrollment.create({
      data: {
        userId: student.id,
        courseId: course1.id,
        status: 'ACTIVE',
        progress: 0,
      },
    })

    await prisma.enrollment.create({
      data: {
        userId: student.id,
        courseId: course2.id,
        status: 'ACTIVE',
        progress: 0,
      },
    })
    console.log('📚 Enrollments created')

    // Create onboarding progress
    await prisma.onboardingProgress.create({
      data: {
        userId: student.id,
        currentStep: 'CAREER_PATH',
        completed: false,
        responses: {},
      },
    })

    console.log('✅ Seed completed successfully!')
  } catch (error) {
    console.error('Error during seeding:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })