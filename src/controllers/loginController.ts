import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password }: IUser = req.body;
  const response = await loginService.login(username, password);
  res.status(200).json(response);
};

export default login;