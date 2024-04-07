-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "topFiveUserId" TEXT NOT NULL,
    "watchedUserId" TEXT NOT NULL,
    "wantToWatchUserId" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TvShow" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "topFiveUserId" TEXT NOT NULL,
    "watchedUserId" TEXT NOT NULL,
    "wantToWatchUserId" TEXT NOT NULL,

    CONSTRAINT "TvShow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_topFiveUserId_fkey" FOREIGN KEY ("topFiveUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_watchedUserId_fkey" FOREIGN KEY ("watchedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_wantToWatchUserId_fkey" FOREIGN KEY ("wantToWatchUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "TvShow" ADD CONSTRAINT "TvShow_topFiveUserId_fkey" FOREIGN KEY ("topFiveUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "TvShow" ADD CONSTRAINT "TvShow_watchedUserId_fkey" FOREIGN KEY ("watchedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "TvShow" ADD CONSTRAINT "TvShow_wantToWatchUserId_fkey" FOREIGN KEY ("wantToWatchUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
