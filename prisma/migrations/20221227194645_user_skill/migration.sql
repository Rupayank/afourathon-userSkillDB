/*
  Warnings:

  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LEVEL_OF_EXPERIENCE" AS ENUM ('BASIC', 'INTERMIDIATE', 'ADVANCED');

-- DropTable
DROP TABLE "Skill";

-- CreateTable
CREATE TABLE "UserSkill" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadatedAt" TIMESTAMP(3) NOT NULL,
    "skillId" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,
    "levelOfExperience" "LEVEL_OF_EXPERIENCE" NOT NULL DEFAULT 'BASIC',
    "yearOfExperience" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);
