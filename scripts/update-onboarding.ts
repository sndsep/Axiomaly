// scripts/update-onboarding.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateOnboardingStatus() {
  try {
    // Update all users to have hasCompletedOnboarding set to false
    const updated = await prisma.user.updateMany({
      where: {
        hasCompletedOnboarding: null
      },
      data: {
        hasCompletedOnboarding: false
      }
    });

    console.log(`Updated ${updated.count} users`);

  } catch (error) {
    console.error("Error updating onboarding status:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateOnboardingStatus();