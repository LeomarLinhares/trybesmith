import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import connection from './connection';
import QUERY from './queries';

const create = async ({ username, classe, level, password }: IUser) => {
  const [rows] = await connection.execute<ResultSetHeader>(QUERY.CREATE_USER, [
    username,
    classe,
    level,
    password,
  ]);
  
  return rows;
};

export default {
  create,
};