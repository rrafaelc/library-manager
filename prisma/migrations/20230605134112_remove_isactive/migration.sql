/*
  Warnings:

  - You are about to drop the column `is_active` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cellphone" DROP CONSTRAINT "Cellphone_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_active";

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cellphone" ADD CONSTRAINT "Cellphone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
