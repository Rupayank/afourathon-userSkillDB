/*
  Warnings:

  - You are about to drop the column `skillId` on the `UserSkill` table. All the data in the column will be lost.
  - Added the required column `domainName` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserSkill_skillId_key";

-- AlterTable
ALTER TABLE "UserSkill" DROP COLUMN "skillId",
ADD COLUMN     "domainName" TEXT NOT NULL,
ADD COLUMN     "skill" TEXT[];
