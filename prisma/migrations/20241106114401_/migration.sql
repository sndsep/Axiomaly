/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "bio",
ADD COLUMN     "careerPath" TEXT,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "hasCompletedOnboarding" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "onboardingData" JSONB,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "hashedPassword" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Deadline" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deadline_pkey" PRIMARY KEY ("id")
);

-- Add required columns with default values
ALTER TABLE "UserPreferences" 
ADD COLUMN "emailNotifications" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "marketingEmails" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "courseUpdates" BOOLEAN NOT NULL DEFAULT false;
