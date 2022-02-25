import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/IProduct';
import ERROR from './error';

const validateIfNameExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { name }: IProduct = req.body;
  if (name === undefined) return res.status(400).json({ error: ERROR.ER_NAME_REQUIRED });

  next();
};

const validateIfNameIsAString = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { name }: IProduct = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ error: ERROR.ER_NAME_NOT_A_STRING });
  }

  next();
};

const validateNameLength = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { name }: IProduct = req.body;
  if (name.length < 3) return res.status(422).json({ error: ERROR.ER_NAME_LENGTH });

  next();
};

export {
  validateIfNameExist,
  validateIfNameIsAString,
  validateNameLength,
};
