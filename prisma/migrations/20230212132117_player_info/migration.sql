-- CreateTable
CREATE TABLE "player_info" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "money" INTEGER,
    "currentLevel" INTEGER,

    CONSTRAINT "player_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "player_info" ADD CONSTRAINT "player_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
