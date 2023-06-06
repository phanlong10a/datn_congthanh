/*
  Warnings:

  - You are about to drop the column `departmentId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_positionId_fkey";

-- AlterTable
ALTER TABLE "table_for_test" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "departmentId",
DROP COLUMN "positionId";

-- CreateTable
CREATE TABLE "file_record_user" (
    "id" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "file_record_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "table_for_test" ADD CONSTRAINT "table_for_test_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_record_user" ADD CONSTRAINT "file_record_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
