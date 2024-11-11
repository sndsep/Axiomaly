// src/pages/api/register.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, username, password } = req.body

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use.' })
    }

    try {
      // Hash the password
      const hashedPassword = await hash(password, 12)

      // Create the user in the database
      const user = await prisma.user.create({
        data: {
          email,
          name: username,
          hashedPassword,
          role: 'STUDENT', // Default role
        },
      })

      // Respond with success
      res.status(201).json({ user })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'User registration failed' })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
