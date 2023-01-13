import { UserSkill } from '@prisma/client';
import { Skill } from '../interface/asbEvent';
import prisma from '../utils/db';

export const getUserSkillExpertise = async (
  userId: string,
): Promise<Omit<UserSkill, 'skillId' | 'userId' | 'createdAt' | 'updatedAt'>[]> => {
  const skillExpertise = await prisma.userSkill.findMany({
    where: { userId },
    select: {
      id: true,
      domainName: true,
      skill: true,
      levelOfExperience: true,
      yearOfExperience: true,
    },
  });
  return skillExpertise;
};

export const getAllUserSkillExpertise = async (): Promise<UserSkill[]> => {
  const allSkillExpertise = await prisma.userSkill.findMany({});
  return allSkillExpertise;
};

export const getUserSkillExpertiseById = async (id: string) =>{
  return  await prisma.userSkill.findFirst({
    where:{
      id:id 
    }
  })
}

export const addUserSkillExpertise = async (userSkill: Skill[]) => {
  const skillExpertise = await prisma.userSkill.createMany({
    data: userSkill,
  });
  // return skillExpertise;
};

export const updateUserDomain = async (userId: string, skillId: string, domainName: string) => {
  const updateUserSkill = await prisma.userSkill.updateMany({
    where: {
      skillId: skillId,
      AND: {
        userId: userId,
      },
    },
    data: {
      domainName: domainName,
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
  return prisma.userSkill.delete({
    where: {
      id: id,
    },
  });
};

export const deleteManyUserSkillExpertise = async (id: string[]) => {
  return prisma.userSkill.deleteMany({
    where: {
      id: {
        in: id,
      },
    },
  });
};

export const getUserSkills = async (
  userId: string,
  skillId: string,
): Promise<Pick<UserSkill, 'id' | 'skill' | 'domainName'>[]> => {
  const skillExpertise = await prisma.userSkill.findMany({
    where: {
      userId,
      AND: {
        skillId,
      },
    },
    select: {
      id: true,
      domainName: true,
      skill: true,
    },
  });
  return skillExpertise;
};
