/*
  Warnings:

  - A unique constraint covering the columns `[skillId]` on the table `UserSkill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserSkill_skillId_key" ON "UserSkill"("skillId");
