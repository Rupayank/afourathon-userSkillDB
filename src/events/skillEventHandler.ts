import { ServiceBusMessage } from '@azure/service-bus';
import {
  addUserSkillExpertise,
  deleteManyUserSkillExpertise,
  deleteUserSkillExpertise,
  getUserSkills,
  updateUserDomain,
  updateUserSkillExpertise,
} from '../handlers/skillExpertiseHandler';
import { MessageBody } from '../interface/asbEvent';

export async function skillCreated(message: ServiceBusMessage) {
  const body: MessageBody = message.body;
  const userSkills = body.skill.map((skill) => {
    return { skillId: body.id, userId: body.userId, domainName: body.domainName, skill: skill };
  });
  const skill = await addUserSkillExpertise(userSkills);
  console.log(`skill created skill -${skill}`);
}
export async function skillUpdate(message: ServiceBusMessage) {
  const body: MessageBody = message.body;
  // console.log(`updated skill -${body}`)
  const skillCollection = await getUserSkills(body.userId, body.id);

  let domainName = skillCollection[0].domainName;
  let isDomainNameUpdate = false;
  if (domainName !== body.domainName) {
    isDomainNameUpdate = true;
    domainName = body.domainName;
  }
  const delete_array = [];
  skillCollection.forEach((skill) => {
    if (!body.skill.includes(skill.skill)) {
      delete_array.push(skill.id);
    }
  });
  const add_array = [];
  body.skill.forEach((sk) => {
    if (!skillCollection.some((skillName) => skillName.skill == sk)) {
      add_array.push({ skillId: body.id, userId: body.userId, domainName: body.domainName, skill: sk });
    }
  });

  const userSkills = body.skill.map((skill) => {
    return { skillId: body.id, userId: body.userId, domainName: body.domainName, skill: skill };
  });

  if (add_array.length !== 0) {
    await addUserSkillExpertise(add_array);
  }
  if (delete_array.length !== 0) {
    await deleteManyUserSkillExpertise(delete_array);
  }
  if (isDomainNameUpdate) {
    await updateUserDomain(body.userId, body.id, domainName);
  }
}
export async function skillDelete(message: ServiceBusMessage) {
  const body: MessageBody = message.body;
  const skillCollection = await getUserSkills(body.userId, body.id);
  const delete_array = skillCollection.map((skill) => {
    return skill.id;
  });
  const skill = await deleteManyUserSkillExpertise(delete_array);
  console.log(`deleted skill -${skill}`);
}
