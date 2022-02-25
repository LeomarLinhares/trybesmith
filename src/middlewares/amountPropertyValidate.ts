import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/IProduct';
import ERROR from './error';

const validateIfAmountExist = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { amount }: IProduct = req.body;
  if (amount === undefined) return res.status(400).json({ error: ERROR.ER_AMOUNT_REQUIRED });

  next();
};

const validateIfAmountIsAString = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { amount }: IProduct = req.body;
  if (typeof amount !== 'string') {
    return res.status(422).json({ error: ERROR.ER_AMOUNT_NOT_A_STRING });
  }

  next();
};

const validateAmountLength = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { amount }: IProduct = req.body;
  if (amount.length < 3) return res.status(422).json({ error: ERROR.ER_AMOUNT_LENGTH });

  next();
};

export {
  validateIfAmountExist,
  validateIfAmountIsAString,
  validateAmountLength,
};
