import { Request, Response, NextFunction } from 'express';
import ERROR from './error';
import { IUser } from '../interfaces/IUser';

const validateIfNameExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { username }: IUser = req.body;
  if (username === undefined) return res.status(400).json({ error: ERROR.ER_USERNAME_REQUIRED });

  next();
};

export {
  validateIfNameExist,
};
