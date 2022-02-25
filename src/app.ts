import express from 'express';
import loginRoute from './api/routes/login';
import productsRoute from './api/routes/products';
import usersRoute from './api/routes/users';

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(loginRoute);
app.use(productsRoute);

export default app;
