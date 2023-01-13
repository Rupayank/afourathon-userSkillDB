export interface MessageBody {
    id: string,
    userName : string,
    userEmail : string,
    userId : string,
    skill : string[],
    domainName: string
}
export interface Skill {
    skillId: string;
    userId: string;
    domainName: string;
    skill: string;
}  