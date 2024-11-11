/*
  Warnings:

  - The primary key for the `Deadline` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `Deadline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deadline" DROP CONSTRAINT "Deadline_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Deadline_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Deadline_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT;

-- AddForeignKey
ALTER TABLE "Deadline" ADD CONSTRAINT "Deadline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
