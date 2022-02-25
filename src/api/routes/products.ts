import 'express-async-errors';
import { Router } from 'express';
import validateJWT from '../auth/validateJWT';
import { createProduct, getProducts } from '../../controllers/productsController';
import {
  validateIfNameExist,
  validateIfNameIsAString,
  validateNameLength,
} from '../../middlewares/namePropertyValidate';
import {
  validateAmountLength,
  validateIfAmountExist,
  validateIfAmountIsAString,
} from '../../middlewares/amountPropertyValidate';

const productsRoute = Router();

productsRoute
  .post(
    '/products',
    validateJWT,
    validateIfNameExist,
    validateIfNameIsAString,
    validateNameLength,
    validateIfAmountExist,
    validateIfAmountIsAString,
    validateAmountLength,
    createProduct,
  )
  .get(
    '/products',
    validateJWT,
    getProducts,
  );

export default productsRoute;
