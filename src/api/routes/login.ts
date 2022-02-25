import 'express-async-errors';
import { Router } from 'express';
import login from '../../controllers/loginController';
import {
  validateIfUsernameExist,
  validateIfPasswordExist,
  validateIfPasswordAndUsernameMatch,
} from '../../middlewares';

const loginRoute = Router();

loginRoute.post(
  '/login',
  validateIfUsernameExist,
  validateIfPasswordExist,
  validateIfPasswordAndUsernameMatch,
  login,
);

export default loginRoute;