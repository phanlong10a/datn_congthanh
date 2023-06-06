-- AlterTable
ALTER TABLE "voice_record" ADD COLUMN     "record_questionId" TEXT;

-- AddForeignKey
ALTER TABLE "voice_record" ADD CONSTRAINT "voice_record_record_questionId_fkey" FOREIGN KEY ("record_questionId") REFERENCES "record_question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
