import express from 'express';
import users from './api/routes/users';

const app = express();

app.use(express.json());

app.use(users);

export default app;
