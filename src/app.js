import './setup.js';
import express from 'express';
import cors from 'cors';
import signIn from './controllers/signIn.js';
import signUp from './controllers/signUp.js';
import getUser from './controllers/getUser.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.sendStatus(200);
});

app.post('/sign-in', signIn);

app.post('/sign-up', signUp);

app.get('/user', getUser);

export default app;
