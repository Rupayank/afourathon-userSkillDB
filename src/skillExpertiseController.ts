import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();
async function getUserSkillExpertise(req: Request, res: Response) {
  try {
    const userId = req.query.id as string;
    const skillExpertise = await prisma.userSkill.findMany({ where: { userId } });
    res.status(200).send({ message: `${userId} Skill Expertise `, response: skillExpertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
async function getAllUserSkillExpertise(req: Request, res: Response) {
  try {
    const skillExpertise = await prisma.userSkill.findMany({});
    res.status(200).send({ message: `All Users Skill Expertise `, response: skillExpertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
async function addUserSkillExpertise(req, res) {
  try {
    const { userId, createdAt, updatedAt, skillId, levelOfExperience, yearOfExperience } = req.body;
    const skillExpertise = await prisma.userSkill.create({
      data: {
        userId,
        createdAt,
        updatedAt,
        skillId,
        levelOfExperience,
        yearOfExperience,
      },
    });
    res.status(201).send({ message: 'New User skill added', response: skillExpertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
async function updateUserSkillExpertise(req: Request, res: Response) {
  try {
    const id = req.query.id as string;
    const { levelOfExperience, yearOfExperience } = req.body;
    const updateUserSkill = await prisma.userSkill.update({
      where: {
        id,
      },
      data: {
        levelOfExperience,
        yearOfExperience,
      },
    });
    res.status(200).send({ message: 'User Skill Expertise updated', response: updateUserSkill });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
export { getUserSkillExpertise, addUserSkillExpertise, getAllUserSkillExpertise, updateUserSkillExpertise };
