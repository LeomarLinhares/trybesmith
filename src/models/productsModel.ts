import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';
import QUERY from './queries';

const create = async ({ name, amount }: IProduct): Promise<ResultSetHeader> => {
  const [rows] = await connection.execute<ResultSetHeader>(QUERY.CREATE_PRODUCT, [
    name,
    amount,
  ]);
  
  return rows;
};

const getAll = async () => {
  const [rows] = await connection.execute<RowDataPacket[]>(QUERY.GET_ALL_PRODUCTS);
  return rows;
};

export default {
  create,
  getAll,
};
