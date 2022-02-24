import express from 'express';
import loginRoute from './api/routes/login';
import usersRoute from './api/routes/users';

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(loginRoute);

export default app;
