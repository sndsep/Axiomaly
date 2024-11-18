-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "level" TEXT,
ADD COLUMN     "thumbnail" TEXT;

-- AlterTable
ALTER TABLE "OnboardingProgress" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserPreferences" ALTER COLUMN "preferredTags" SET DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Course_categoryId_idx" ON "Course"("categoryId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
