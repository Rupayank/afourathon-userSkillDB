import app from './server';
import { receiveMessages, Sessions } from './utils/asbEvent';
import {ServiceBusClient} from '@azure/service-bus'
import { skillCreated, skillDelete, skillUpdate } from './events/skillEventHandler';

const PORT = process.env.port;
app.listen(PORT, async () => {
  console.log(`server started on http://localhost:${PORT}`);
  
  const serviceBus = new ServiceBusClient(process.env.connectionString);
  
  await receiveMessages(serviceBus,Sessions.skillCreate,skillCreated)
  await receiveMessages(serviceBus,Sessions.skillUpdate,skillUpdate)
  await receiveMessages(serviceBus,Sessions.skillDelete,skillDelete)
});
