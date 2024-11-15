-- DropIndex
DROP INDEX "OnboardingProgress_userId_idx";

-- AlterTable
ALTER TABLE "OnboardingProgress" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "SurveyResponse" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "experienceLevel" TEXT NOT NULL,
    "interests" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "weeklyHours" INTEGER NOT NULL,
    "goals" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "specializations" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "careerGoals" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "timeCommitment" INTEGER,
    "priorEducation" TEXT,
    "portfolioUrl" TEXT,
    "careerPath" "CareerPath" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SurveyResponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SurveyResponse_userId_key" ON "SurveyResponse"("userId");

-- AddForeignKey
ALTER TABLE "SurveyResponse" ADD CONSTRAINT "SurveyResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
