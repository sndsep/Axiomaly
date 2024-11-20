/*
  Warnings:

  - The values [INTERESTS,EXPERIENCE,GOALS,SCHEDULE,BACKGROUND,PORTFOLIO,MENTORSHIP,SURVEY_COMPLETED] on the enum `OnboardingStep` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OnboardingStep_new" AS ENUM ('CAREER_PATH', 'SURVEY', 'RECOMMENDATIONS', 'PROFILE', 'TOUR', 'COMPLETED');
ALTER TABLE "OnboardingProgress" ALTER COLUMN "currentStep" DROP DEFAULT;
ALTER TABLE "OnboardingProgress" ALTER COLUMN "currentStep" TYPE "OnboardingStep_new" USING ("currentStep"::text::"OnboardingStep_new");
ALTER TYPE "OnboardingStep" RENAME TO "OnboardingStep_old";
ALTER TYPE "OnboardingStep_new" RENAME TO "OnboardingStep";
DROP TYPE "OnboardingStep_old";
ALTER TABLE "OnboardingProgress" ALTER COLUMN "currentStep" SET DEFAULT 'CAREER_PATH';
COMMIT;
