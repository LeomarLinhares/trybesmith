import { Request, Response } from 'express';
import productsService from '../services/productsService';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const response = await productsService.create({ name, amount });
  res.status(201).json(response);
};

export const getProducts = async (_req: Request, res: Response): Promise<void> => {
  const response = await productsService.getAll();
  res.status(200).json(response);
};
