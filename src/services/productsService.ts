import { IProduct, IProductReturn } from '../interfaces/IProduct';
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
};
