-- CreateTable
CREATE TABLE "voice_record" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "record" TEXT NOT NULL,
    "nameRecord" TEXT,
    "indexRecord" TEXT,

    CONSTRAINT "voice_record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "voice_record_userId_key" ON "voice_record"("userId");

-- AddForeignKey
ALTER TABLE "voice_record" ADD CONSTRAINT "voice_record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
