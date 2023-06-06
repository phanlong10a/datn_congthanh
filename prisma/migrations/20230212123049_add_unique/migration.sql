/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `record_question` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "record_question_index_key" ON "record_question"("index");
