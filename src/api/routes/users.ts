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
  validateIfPasswordExist,
  validateIfPasswordIsAString,
  validateIfUsernameExist,
  validateIfUsernameIsAString,
  validatePasswordLength,
  validateUsernameLength,
} from '../../middlewares';

const usersRoute = Router();

usersRoute.post(
  '/users', 
  validateIfUsernameExist,
  validateIfUsernameIsAString,
  validateUsernameLength,
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