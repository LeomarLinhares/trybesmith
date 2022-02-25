import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const response = await productsService.create({ name, amount });
  res.status(201).json(response);
};

export default createProduct;
