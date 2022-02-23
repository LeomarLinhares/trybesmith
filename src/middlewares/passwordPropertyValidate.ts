import { Request, Response, NextFunction } from 'express';
import ERROR from './error';
import { IUser } from '../interfaces/IUser';

const validateIfPasswordExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { password }: IUser = req.body;
  if (password === undefined) return res.status(400).json({ error: ERROR.ER_PASSWORD_REQUIRED });

  next();
};

const validateIfPasswordIsAString = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { password }: IUser = req.body;
  if (typeof password !== 'string') {
    return res.status(422).json({ error: ERROR.ER_PASSWORD_NOT_A_STRING });
  }

  next();
};

const validatePasswordLength = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { password }: IUser = req.body;
  if (password.length < 8) return res.status(422).json({ error: ERROR.ER_PASSWORD_LENGTH });

  next();
};

export {
  validateIfPasswordExist,
  validateIfPasswordIsAString,
  validatePasswordLength,
};
