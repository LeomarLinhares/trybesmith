import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const response = await usersService.create(req.body);
  res.status(201).json(response);
};

export default createUser;
