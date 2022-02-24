import 'express-async-errors';
import { Router } from 'express';
import createUser from '../../controllers/usersController';

import {
  validateClasseLength,
  validateIfClasseExist,
  validateIfClasseIsAString,
  validateIfLevelExist,
  validateIfLevelIsANumber,
  validateIfLevelIsNotZero,
  validateIfNameExist,
  validateIfNameIsAString,
  validateIfPasswordExist,
  validateIfPasswordIsAString,
  validateNameLength,
  validatePasswordLength,
} from '../../middlewares';

const usersRoute = Router();

usersRoute.post(
  '/users', 
  validateIfNameExist,
  validateIfNameIsAString,
  validateNameLength,
  validateIfClasseExist,
  validateIfClasseIsAString,
  validateClasseLength,
  validateIfLevelExist,
  validateIfLevelIsANumber,
  validateIfLevelIsNotZero,
  validateIfPasswordExist,
  validateIfPasswordIsAString,
  validatePasswordLength,
  createUser,
);

export default usersRoute;