/*
  Warnings:

  - You are about to drop the column `createdAt` on the `UserPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `learningPath` on the `UserPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `notifications` on the `UserPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `preferredTags` on the `UserPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `timezone` on the `UserPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyGoal` on the `UserPreferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPreferences" DROP COLUMN "createdAt",
DROP COLUMN "learningPath",
DROP COLUMN "notifications",
DROP COLUMN "preferredTags",
DROP COLUMN "timezone",
DROP COLUMN "updatedAt",
DROP COLUMN "weeklyGoal",
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "portfolio" TEXT,
ADD COLUMN     "twitter" TEXT,
ALTER COLUMN "emailNotifications" DROP DEFAULT,
ALTER COLUMN "marketingEmails" DROP DEFAULT,
ALTER COLUMN "courseUpdates" DROP DEFAULT;
