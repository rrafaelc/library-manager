/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Cellphone` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cellphone_number_key" ON "Cellphone"("number");
