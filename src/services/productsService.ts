import { IProduct, IProductReturn, IProductIdWithOrder } from '../interfaces/IProduct';
import productsModel from '../models/productsModel';

export default {
  create: async ({ name, amount }: IProduct): Promise<IProductReturn | void> => {
    try {
      const { insertId: id } = await productsModel.create({ name, amount });
      return { item: { id, name, amount: `${amount}` } };
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (): Promise<IProductIdWithOrder[] | void> => {
    try {
      const response = await productsModel.getAll();
      return response as IProductIdWithOrder[];
    } catch (error) {
      console.log(error);
    }
  },
};
