import { Request, Response, NextFunction } from 'express';
import ERROR from './error';
import { IUser } from '../interfaces/IUser';

const validateIfUsernameExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { username }: IUser = req.body;
  if (username === undefined) return res.status(400).json({ error: ERROR.ER_USERNAME_REQUIRED });

  next();
};

const validateIfUsernameIsAString = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { username }: IUser = req.body;
  if (typeof username !== 'string') {
    return res.status(422).json({ error: ERROR.ER_USERNAME_NOT_A_STRING });
  }

  next();
};

const validateUsernameLength = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { username }: IUser = req.body;
  if (username.length < 3) return res.status(422).json({ error: ERROR.ER_USERNAME_LENGTH });

  next();
};

export {
  validateIfUsernameExist,
  validateIfUsernameIsAString,
  validateUsernameLength,
};
