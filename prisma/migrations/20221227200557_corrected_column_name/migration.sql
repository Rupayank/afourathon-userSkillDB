/*
  Warnings:

  - You are about to drop the column `upadatedAt` on the `UserSkill` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSkill" DROP COLUMN "upadatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
