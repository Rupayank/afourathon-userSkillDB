import { ServiceBusClient, ServiceBusMessage, ProcessErrorArgs, delay ,MessageHandlers} from '@azure/service-bus';


export enum Sessions {
  skillCreate = 'create-1',
  skillUpdate = 'update-1',
  skillDelete = 'delete-1'

}

export async function receiveMessages(sbClient: ServiceBusClient, sessionId: string,processMessage:MessageHandlers['processMessage']) {
 const topicName = process.env.topic_name || ''
 const subName = process.env.subscribtion_name || ''
    
 const receiver = await sbClient.acceptSession(topicName, subName, sessionId);
    
    const processError = async (args: ProcessErrorArgs) => {
      console.log(`>>>>> Error from error source ${args.errorSource} occurred: `, args.error);
    };

    receiver.subscribe({
      processMessage,
      processError,
    });
    console.log(`event created for ${sessionId}`)
}

