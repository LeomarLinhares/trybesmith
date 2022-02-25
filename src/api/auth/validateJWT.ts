import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'segredoSecretoDoServer';

const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Token not found' });
  
  try {
    JWT.verify(token, secret);
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateJWT;
