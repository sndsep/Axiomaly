// scripts/check-onboarding.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkOnboardingStatus() {
  try {
    // Check if field exists in schema
    const userSchema = await prisma.user.findFirst();
    console.log("\nUser schema sample:", userSchema);

    // Check all users' onboarding status
    const users = await prisma.user.findMany({
      select: {
        email: true,
        hasCompletedOnboarding: true
      }
    });
    console.log("\nUsers onboarding status:", users);

    // Count users by onboarding status
    const stats = await prisma.user.groupBy({
      by: ['hasCompletedOnboarding'],
      _count: true
    });
    console.log("\nOnboarding statistics:", stats);

  } catch (error) {
    console.error("Error checking onboarding status:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkOnboardingStatus();