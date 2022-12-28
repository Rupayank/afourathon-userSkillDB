import express from 'express';
import morgan from 'morgan';
import { getUserSkillExpertise, addUserSkillExpertise, getAllUserSkillExpertise,updateUserSkillExpertise } from './skillExpertiseController';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/skill/expertise', getUserSkillExpertise);
app.get('/skill/expertise/all', getAllUserSkillExpertise);
app.post('/skill/expertise', addUserSkillExpertise);
app.put('/skill', updateUserSkillExpertise);
export default app;
