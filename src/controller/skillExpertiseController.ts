import { BadRequestError } from '@hackathonskilldb/common-middlewares';
import { Request, Response } from 'express';
import {
  getUserSkillExpertise,
  getAllUserSkillExpertise,
  addUserSkillExpertise,
  updateUserSkillExpertise,
  deleteUserSkillExpertise,
} from '../handlers/skillExpertiseHandler';
async function getUserExpertise(req: Request, res: Response) {
  try {
    const expertise = await getUserSkillExpertise(req.currentUser.id);
    res.status(200).send({ message: 'User expertise', response: expertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

async function getAllExpertise(req: Request, res: Response) {
  try {
    const expertise = await getAllUserSkillExpertise();
    res.status(200).send({ message: 'All User expertise', response: expertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

async function addExpertise(req: Request, res: Response) {
  try {
    const Uid = req.currentUser.id;
    const { skillId, levelOfExperience, yearOfExperience } = req.body;
    const expertise = await addUserSkillExpertise(Uid, skillId, levelOfExperience, yearOfExperience);
    res.status(201).send({ message: 'Added User expertise', response: expertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

async function updateExpertise(req: Request, res: Response) {
  const id = req.query.id as string;
  if (!id) {
    throw new BadRequestError('Id should be prsent');
  }
  const expertiseExists = await getUserSkillExpertise(id);
  if (!expertiseExists) {
    throw new BadRequestError('Expertise does not exist');
  }
  try {
    const { levelOfExperience, yearOfExperience } = req.body;
    const expertise = await updateUserSkillExpertise(id, levelOfExperience, yearOfExperience);
    res.status(200).send({ message: 'Updated User expertise', response: expertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

async function deleteExpertise(req: Request, res: Response) {
  const id = req.query.id as string;
  if (!id) {
    throw new BadRequestError('Id should be prsent');
  }
  const expertiseExists = await getUserSkillExpertise(id);
  if (!expertiseExists) {
    throw new BadRequestError('Expertise does not exist');
  }
  try {
    const deleteExpertise = await deleteUserSkillExpertise(id);
    res.status(200).send({ message: 'Deleted User Expertise', response: deleteExpertise });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export { getUserExpertise, getAllExpertise, addExpertise, updateExpertise, deleteExpertise };
