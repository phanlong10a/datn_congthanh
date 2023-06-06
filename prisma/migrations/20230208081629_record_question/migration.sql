-- CreateTable
CREATE TABLE "record_question" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "questionContent" TEXT,
    "reward" INTEGER,
    "index" INTEGER,
    "lengthRequire" INTEGER,

    CONSTRAINT "record_question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requireText" (
    "text" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "record_questionId" TEXT,

    CONSTRAINT "requireText_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "requireText" ADD CONSTRAINT "requireText_record_questionId_fkey" FOREIGN KEY ("record_questionId") REFERENCES "record_question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
