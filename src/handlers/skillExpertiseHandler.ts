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
  id:string,
  userId: string,
  skill: string[],
  domainName: string,
  levelOfExperience?: 'BASIC' | 'INTERMIDIATE' | 'ADVANCED',
  yearOfExperience?: number,
): Promise<UserSkill> => {
  const skillExpertise = await prisma.userSkill.create({
    data: {
      id,
      userId,
      skill,
      domainName,
      levelOfExperience,
      yearOfExperience,
    },
  });
  return skillExpertise;
};

export const updateUserSkill = async (
  id: string,
  skill: string[],
  domainName: string
) => {
  const updateUserSkill = await prisma.userSkill.update({
    where: {
      id,
    },
    data: {
      domainName: domainName,
      skill: skill
    },
  });
  return updateUserSkill;
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
      levelOfExperience: levelOfExperience,
      yearOfExperience: yearOfExperience,
    },
  });
  return updateUserSkill;
};

export const deleteUserSkillExpertise = async (id: string) => {
  return prisma.userSkill.delete({ where: { id } });
};
