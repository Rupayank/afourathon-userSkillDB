import {ServiceBusMessage} from '@azure/service-bus'
import {addUserSkillExpertise, deleteUserSkillExpertise, updateUserSkill, updateUserSkillExpertise} from '../handlers/skillExpertiseHandler'
interface Skill {
    id: string,
    userName : string,
    userEmain : string,
    userId : string,
    skill : string[],
    domainName: string
} 

export async function skillCreated(message:ServiceBusMessage) {
    const body:Skill  = message.body
    const skill = await addUserSkillExpertise(body.id,body.userId,body.skill,body.domainName)
    console.log(`skill created skill -${skill}`)

}
export async function skillUpdate(message:ServiceBusMessage) {
    const body:Skill  = message.body
    console.log(`updated skill -${body}`)
    const skill = await updateUserSkill(body.id,body.skill,body.domainName)

}
export async function skillDelete(message:ServiceBusMessage) {
    const body:Skill  = message.body
    const skill = await await deleteUserSkillExpertise(body.id)
    console.log(`deleted skill -${skill}`)

}