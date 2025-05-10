/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Subjects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Subjects_code_key" ON "Subjects"("code");
