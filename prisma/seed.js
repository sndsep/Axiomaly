// prisma/seed.js

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

async function cleanDatabase() {
  console.log('🧹 Cleaning database...')
  
  await prisma.activity.deleteMany()
  await prisma.studentProgress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.course.deleteMany()
  await prisma.category.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.onboardingProgress.deleteMany()
  await prisma.userPreferences.deleteMany()
  await prisma.session.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()
}

async function main() {
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
      }
    }
  })
  console.log('👤 Admin created')

  // Create instructor
  const instructor = await prisma.user.create({
    data: {
      email: 'instructor@example.com',
      name: 'Test Instructor',
      hashedPassword: await bcrypt.hash('instructor123', 12),
      role: 'INSTRUCTOR',
      careerPath: 'SHORT_COURSE',
    }
  })
  console.log('👨‍🏫 Instructor created')

  // Create test lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: 'Introduction to VFX',
    }
  })
  console.log('📚 Lesson created')

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({ data: { name: '3D Modeling' } }),
    prisma.category.create({ data: { name: 'Animation' } }),
    prisma.category.create({ data: { name: 'VFX Compositing' } }),
    prisma.category.create({ data: { name: 'Lighting & Rendering' } }),
  ])
  console.log('📝 Categories created')

  // Define courses
  const coursesData = [
    {
      title: "Fundamentals of 3D Modeling",
      description: "Learn the basics of 3D modeling with industry-standard tools",
      level: "beginner",
      duration: "6 weeks",
      thumbnail: "/api/placeholder/192/128?text=Fundamentals%20of%203D%20Modeling",
      categoryId: categories[0].id, // 3D Modeling category
      instructorId: instructor.id,
      resources: {
        create: [
          {
            title: "Course Materials",
            description: "Essential resources for the course",
            url: "/resources/materials.pdf"
          }
        ]
      }
    },
    {
      title: "Advanced Animation Techniques",
      description: "Master character animation and motion dynamics",
      level: "advanced",
      duration: "8 weeks",
      thumbnail: "/api/placeholder/192/128?text=Advanced%20Animation",
      categoryId: categories[1].id, // Animation category
      instructorId: instructor.id,
      resources: {
        create: [
          {
            title: "Animation Reference Library",
            description: "Collection of animation references",
            url: "/resources/animation-refs.zip"
          }
        ]
      }
    }
  ]

  // Create courses
  const courses = await Promise.all(
    coursesData.map(courseData => 
      prisma.course.create({
        data: courseData
      })
    )
  )
  console.log('📚 Courses created')

  // Create test student
  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      hashedPassword: await bcrypt.hash('student123', 12),
      role: 'STUDENT',
      careerPath: 'SHORT_COURSE',
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
    }
  })
  console.log('🎓 Student with enrollments and activities created')

  // Create progress records
  await Promise.all(courses.map(course => 
    prisma.studentProgress.create({
      data: {
        userId: student.id,
        courseId: course.id,
        progress: 0,
        lastUpdated: new Date(),
      }
    })
  ))
  console.log('📊 Progress records created')

  console.log('✅ Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })