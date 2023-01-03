import express from 'express';
import morgan from 'morgan';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser, requireAuth } from '@hackathonskilldb/common-middlewares';
import {
  getExpertise,
  getAllExpertise,
  addExpertise,
  updateExpertise,
  deleteExpertise,
} from './controller/skillExpertiseController';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', true);
app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
);
app.use(currentUser);

// Routes
app.get('/skill/expertise', requireAuth, getExpertise);
app.get('/skill/expertise/all', requireAuth, getAllExpertise);
app.post('/skill/expertise', requireAuth, addExpertise);
app.put('/skill/expertise', requireAuth, updateExpertise);
app.delete('/skill/expertise', requireAuth, deleteExpertise);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
export default app;
