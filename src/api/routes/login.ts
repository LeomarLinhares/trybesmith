import 'express-async-errors';
import { Router } from 'express';
import login from '../../controllers/loginController';
import {
  validateIfNameExist,
  validateIfPasswordAndUsernameMatch,
  validateIfPasswordExist,
} from '../../middlewares';

const loginRoute = Router();

loginRoute.post(
  '/login',
  validateIfNameExist,
  validateIfPasswordExist,
  validateIfPasswordAndUsernameMatch,
  login,
);

export default loginRoute;