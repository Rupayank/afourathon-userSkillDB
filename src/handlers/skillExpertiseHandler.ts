import { UserSkill } from '@prisma/client';
import prisma from '../utils/db';

export const getUserSkillExpertise = async (userId: string): Promise<UserSkill[]> => {
  const skillExpertise = await prisma.userSkill.findMany({ where: { userId } });
  return skillExpertise;
};

export const getAllUserSkillExpertise = async (): Promise<UserSkill[]> => {
  const allSkillExpertise = await prisma.userSkill.findMany({});
  return allSkillExpertise;
};

export const addUserSkillExpertise = async (
  userId: string,
  skillId: string,
  levelOfExperience: 'BASIC' | 'INTERMIDIATE' | 'ADVANCED',
  yearOfExperience: number,
): Promise<UserSkill> => {
  const skillExpertise = await prisma.userSkill.create({
    data: {
      userId,
      skillId,
      levelOfExperience,
      yearOfExperience,
    },
  });
  return skillExpertise;
};

export const updateUserSkillExpertise = async (
  id: string,
  levelOfExperience: 'BASIC' | 'INTERMIDIATE' | 'ADVANCED',
  yearOfExperience: number,
): Promise<UserSkill> => {
  const updateUserSkill = await prisma.userSkill.update({
    where: {
      id,
    },
    data: {
      levelOfExperience,
      yearOfExperience,
    },
  });
  return updateUserSkill;
};
export const deleteUserSkillExpertiseById = async (id: string) => {
  return prisma.userSkill.delete({ where: { id } });
};
