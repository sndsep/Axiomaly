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
  await prisma.enrollment.deleteMany() // This now includes the progress
  await prisma.surveyResponse.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.course.deleteMany()
  await prisma.category.deleteMany()
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
  ])
  console.log('🎯 Specializations created')

  // Create courses with lessons
  const coursesData = [
    {
      title: "Fundamentals of 3D Modeling",
      description: "Learn the basics of 3D modeling with industry-standard tools",
      thumbnail: "/api/placeholder/800/600",
      duration: "12 weeks",
      level: "BEGINNER",
      categoryId: categories[0].id,
      instructorId: instructor.id,
      price: 999.99,
      resources: {
        create: [
          {
            title: "Course Materials",
            description: "Essential resources for the course",
            url: "/resources/materials.pdf"
          }
        ]
      },
      lessons: {
        create: [
          {
            title: "Introduction to 3D Fundamentals",
            description: "Learn the basic concepts of 3D modeling",
            content: "Detailed lesson content here...",
            duration: 60,
            order: 1,
          },
          {
            title: "Basic Modeling Tools",
            description: "Master the essential modeling tools",
            content: "Detailed lesson content here...",
            duration: 90,
            order: 2,
          }
        ]
      }
    },
    {
      title: "Advanced Animation Techniques",
      description: "Master character animation and motion dynamics",
      thumbnail: "/api/placeholder/800/600",
      duration: "16 weeks",
      level: "ADVANCED",
      categoryId: categories[1].id,
      instructorId: instructor.id,
      price: 1499.99,
      resources: {
        create: [
          {
            title: "Animation Reference Library",
            description: "Collection of animation references",
            url: "/resources/animation-refs.zip"
          }
        ]
      },
      lessons: {
        create: [
          {
            title: "Advanced Character Animation",
            description: "Master character animation principles",
            content: "Detailed lesson content here...",
            duration: 120,
            order: 1,
          },
          {
            title: "Motion Dynamics & Physics",
            description: "Learn realistic motion and physics simulation",
            content: "Detailed lesson content here...",
            duration: 150,
            order: 2,
          }
        ]
      }
    }
  ]

  // Create courses
  const courses = await Promise.all(
    coursesData.map(courseData => 
      prisma.course.create({
        data: courseData,
        include: {
          lessons: true
        }
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
  ])
  console.log('📋 Curricula created')

  // Create prerequisites
  await prisma.prerequisite.create({
    data: {
      curriculumId: curricula[1].id,
      courseId: courses[0].id,
      required: true
    }
  })
  console.log('🔄 Prerequisites created')

  // Create test student
  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      name: 'Test Student',
      hashedPassword: await bcrypt.hash('student123', 12),
      role: 'STUDENT',
      careerPath: 'DEGREE_PROGRAM',
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

  // Create enrollments
  await Promise.all(courses.map(async course => {
    // Create enrollment
    await prisma.enrollment.create({
      data: {
        userId: student.id,
        courseId: course.id,
        status: 'ACTIVE',
        progress: 0,
        enrolledAt: new Date(),
        lessons: {
          connect: course.lessons.map(lesson => ({ id: lesson.id }))
        }
      }
    })
       // Create lesson progress for each lesson
       await Promise.all(course.lessons.map(lesson => 
        prisma.lessonProgress.create({
          data: {
            enrollment: {
              connect: {
                userId_courseId: {
                  userId: student.id,
                  courseId: course.id
                }
              }
            },
            lesson: {
              connect: { id: lesson.id }
            }
          }
        })
      ))

    // Create student progress
    await prisma.studentProgress.create({
      data: {
        userId: student.id,
        courseId: course.id,
        progress: 0,
        lastUpdated: new Date(),
      }
    })
    // Create review
    await prisma.review.create({
      data: {
        rating: 4,
        comment: "Great course content and structure!",
        userId: student.id,
        courseId: course.id
      }
    })
  }))
  console.log('📊 Enrollments, progress records and reviews created')

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