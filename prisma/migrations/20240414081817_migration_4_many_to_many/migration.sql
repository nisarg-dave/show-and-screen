/*
  Warnings:

  - You are about to drop the column `topFiveUserId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `wantToWatchUserId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `watchedUserId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `topFiveUserId` on the `TvShow` table. All the data in the column will be lost.
  - You are about to drop the column `wantToWatchUserId` on the `TvShow` table. All the data in the column will be lost.
  - You are about to drop the column `watchedUserId` on the `TvShow` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_topFiveUserId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_wantToWatchUserId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_watchedUserId_fkey";

-- DropForeignKey
ALTER TABLE "TvShow" DROP CONSTRAINT "TvShow_topFiveUserId_fkey";

-- DropForeignKey
ALTER TABLE "TvShow" DROP CONSTRAINT "TvShow_wantToWatchUserId_fkey";

-- DropForeignKey
ALTER TABLE "TvShow" DROP CONSTRAINT "TvShow_watchedUserId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "topFiveUserId",
DROP COLUMN "wantToWatchUserId",
DROP COLUMN "watchedUserId";

-- AlterTable
ALTER TABLE "TvShow" DROP COLUMN "topFiveUserId",
DROP COLUMN "wantToWatchUserId",
DROP COLUMN "watchedUserId";

-- CreateTable
CREATE TABLE "UserTopFiveMovies" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "UserTopFiveMovies_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "UserWatchedMovies" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "UserWatchedMovies_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "UserWantToWatchMovies" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "UserWantToWatchMovies_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "UserTopFiveTvShows" (
    "userId" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,

    CONSTRAINT "UserTopFiveTvShows_pkey" PRIMARY KEY ("userId","tvShowId")
);

-- CreateTable
CREATE TABLE "UserWatchedTvShows" (
    "userId" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,

    CONSTRAINT "UserWatchedTvShows_pkey" PRIMARY KEY ("userId","tvShowId")
);

-- CreateTable
CREATE TABLE "UserWantToWatchTvShows" (
    "userId" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,

    CONSTRAINT "UserWantToWatchTvShows_pkey" PRIMARY KEY ("userId","tvShowId")
);

-- AddForeignKey
ALTER TABLE "UserTopFiveMovies" ADD CONSTRAINT "UserTopFiveMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserTopFiveMovies" ADD CONSTRAINT "UserTopFiveMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWatchedMovies" ADD CONSTRAINT "UserWatchedMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWatchedMovies" ADD CONSTRAINT "UserWatchedMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWantToWatchMovies" ADD CONSTRAINT "UserWantToWatchMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWantToWatchMovies" ADD CONSTRAINT "UserWantToWatchMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserTopFiveTvShows" ADD CONSTRAINT "UserTopFiveTvShows_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserTopFiveTvShows" ADD CONSTRAINT "UserTopFiveTvShows_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWatchedTvShows" ADD CONSTRAINT "UserWatchedTvShows_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWatchedTvShows" ADD CONSTRAINT "UserWatchedTvShows_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWantToWatchTvShows" ADD CONSTRAINT "UserWantToWatchTvShows_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserWantToWatchTvShows" ADD CONSTRAINT "UserWantToWatchTvShows_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShow"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
