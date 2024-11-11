/*
  Warnings:

  - The `currentStep` column on the `OnboardingProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `onboardingData` on the `User` table. All the data in the column will be lost.
  - The `careerPath` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CareerPath" AS ENUM ('SHORT_COURSE', 'DEGREE_PROGRAM');

-- CreateEnum
CREATE TYPE "OnboardingStep" AS ENUM ('CAREER_PATH', 'SURVEY', 'RECOMMENDATIONS', 'CURRICULUM', 'PROFILE', 'COMPLETED');

-- AlterTable
ALTER TABLE "OnboardingProgress" ADD COLUMN     "acceptedCurriculum" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "selectedCourse" TEXT,
ADD COLUMN     "selectedSpecializations" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "viewedRecommendations" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "currentStep",
ADD COLUMN     "currentStep" "OnboardingStep" NOT NULL DEFAULT 'CAREER_PATH';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "onboardingData",
DROP COLUMN "careerPath",
ADD COLUMN     "careerPath" "CareerPath";

-- AlterTable
ALTER TABLE "UserPreferences" ADD COLUMN     "learningPath" TEXT,
ADD COLUMN     "preferredTags" TEXT[],
ADD COLUMN     "timezone" TEXT,
ADD COLUMN     "weeklyGoal" INTEGER,
ALTER COLUMN "emailNotifications" SET DEFAULT true,
ALTER COLUMN "marketingEmails" SET DEFAULT true,
ALTER COLUMN "courseUpdates" SET DEFAULT true;

-- CreateIndex
CREATE INDEX "OnboardingProgress_userId_idx" ON "OnboardingProgress"("userId");

-- CreateIndex
CREATE INDEX "UserPreferences_userId_idx" ON "UserPreferences"("userId");
