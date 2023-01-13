import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { requestValidate } from './middlewares/request-schema-validate';
import cors from 'cors';

import {
  validateRequest,
  errorHandler,
  NotFoundError,
  currentUser,
  requireAuth,
} from '@hackathonskilldb/common-middlewares';
import {
  getUserExpertise,
  getAllExpertise,
  addExpertise,
  updateExpertise,
  deleteExpertise,
} from './controller/skillExpertiseController';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  //To allow requests from client
  origin: ['http://localhost:3000'],
  credentials: true,
  // exposedHeaders: ["set-cookie"],
};

app.set('trust proxy', true);
app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
);
app.use(cors(corsOptions));
app.use(currentUser);

// Routes
app.get('/skill/expertise', requireAuth, getUserExpertise);
app.get('/skill/expertise/all', requireAuth, getAllExpertise);
app.post('/skill/expertise', requireAuth, requestValidate, validateRequest, addExpertise);
app.put('/skill/expertise', requireAuth, requestValidate, validateRequest, updateExpertise);
app.delete('/skill/expertise', requireAuth, deleteExpertise);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
export default app;
