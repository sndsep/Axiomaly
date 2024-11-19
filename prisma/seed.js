// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

async function cleanDatabase() {
  console.log('🧹 Cleaning database...')
  
  await prisma.activity.deleteMany()
  await prisma.deadline.deleteMany()
  await prisma.prerequisite.deleteMany()
  await prisma.curriculum.deleteMany()
  await prisma.specialization.deleteMany()
  await prisma.studentProgress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.surveyResponse.deleteMany()
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

  // Create specializations
  const specializations = await Promise.all([
    prisma.specialization.create({
      data: {
        name: 'VFX Generalist',
        description: 'Master all aspects of VFX production'
      }
    }),
    prisma.specialization.create({
      data: {
        name: 'Character Animation',
        description: 'Focus on bringing characters to life'
      }
    }),
    prisma.specialization.create({
      data: {
        name: 'FX Technical Director',
        description: 'Specialize in effects and technical aspects'
      }
    })
  ]);
  console.log('🎯 Specializations created')

  // Define courses
  const coursesData = [
    {
      title: "Fundamentals of 3D Modeling",
      description: "Learn the basics of 3D modeling with industry-standard tools",
      categoryId: categories[0].id,
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
      categoryId: categories[1].id,
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

  // Create curricula
  const curricula = await Promise.all([
    prisma.curriculum.create({
      data: {
        title: 'VFX Generalist Path - Beginner',
        description: 'Comprehensive VFX education for beginners',
        difficultyLevel: 'BEGINNER',
        durationWeeks: 48,
        specializationId: specializations[0].id,
        courses: {
          connect: [{ id: courses[0].id }]
        }
      }
    }),
    prisma.curriculum.create({
      data: {
        title: 'Advanced Animation Track',
        description: 'Specialized path for character animation',
        difficultyLevel: 'ADVANCED',
        durationWeeks: 36,
        specializationId: specializations[1].id,
        courses: {
          connect: [{ id: courses[1].id }]
        }
      }
    })
  ]);
  console.log('📋 Curricula created')

  // Create prerequisites
  await prisma.prerequisite.create({
    data: {
      curriculumId: curricula[1].id,
      courseId: courses[0].id,
      required: true
    }
  });
  console.log('🔄 Prerequisites created')

  // Create test student
  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      hashedPassword: await bcrypt.hash('student123', 12),
      role: 'STUDENT',
      careerPath: 'DEGREE_PROGRAM',
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
      },
      onboardingProgress: {
        create: {
          currentStep: 'RECOMMENDATIONS',
          completed: false,
          responses: {
            experienceLevel: 'BEGINNER',
            interests: ['3d-modeling', 'animation'],
            weeklyHours: 10
          }
        }
      }
    }
  })
  console.log('🎓 Student created')

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