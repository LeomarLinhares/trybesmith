import { Request, Response, NextFunction } from 'express';
import ERROR from './error';
import { IUser } from '../interfaces/IUser';

const validateIfLevelExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { level }: IUser = req.body;
  if (level === undefined) return res.status(400).json({ error: ERROR.ER_LEVEL_REQUIRED });

  next();
};

const validateIfLevelIsANumber = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { level }: IUser = req.body;
  if (typeof level !== 'number') {
    return res.status(422).json({ error: ERROR.ER_LEVEL_NOT_A_NUMBER });
  }

  next();
};

const validateIfLevelIsNotZero = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { level }: IUser = req.body;
  if (level <= 0) return res.status(422).json({ error: ERROR.ER_LEVEL_CANNOT_BE_ZERO_OR_LESS });

  next();
};

export {
  validateIfLevelExist,
  validateIfLevelIsANumber,
  validateIfLevelIsNotZero,
};
