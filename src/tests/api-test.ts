// src/tests/api-test.ts
import { signIn } from 'next-auth/react'

async function testEnrolledCourses() {
  // Log in as test student
  await signIn('credentials', {
    email: 'student@example.com',
    password: 'student123',
    redirect: false
  })

  // Then fetch enrolled courses
  const res = await fetch('/api/dashboard/enrolled-courses', {
    credentials: 'include'
  })

  console.log(await res.json())
}

testEnrolledCourses()