/*
  Warnings:

  - Added the required column `skillId` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSkill" ADD COLUMN     "skillId" TEXT NOT NULL,
ALTER COLUMN "skill" SET NOT NULL,
ALTER COLUMN "skill" SET DATA TYPE TEXT;
