import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import ERROR from './error';

const validateIfClasseExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { classe } = req.body;
  if (classe === undefined) res.status(400).json({ error: ERROR.ER_CLASSE_REQUIRED });

  next();
};

const validateIfClasseIsAString = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { classe }: IUser = req.body;
  if (typeof classe !== 'string') {
    return res.status(422).json({ error: ERROR.ER_CLASSE_NOT_A_STRING });
  }

  next();
};

const validateClasseLength = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { classe }: IUser = req.body;
  if (classe.length < 3) return res.status(422).json({ error: ERROR.ER_CLASSE_LENGTH });

  next();
};

export {
  validateIfClasseExist,
  validateIfClasseIsAString,
  validateClasseLength,
};
