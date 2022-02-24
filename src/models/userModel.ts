import { ResultSetHeader } from 'mysql2';
import { IUser, IUserWithId } from '../interfaces/IUser';
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

const getByUsernameAndPassword = async (username: string, password: string) => {
  const [rows] = await connection.execute(QUERY.GET_BY_USERNAME_AND_PASS, [username, password]);
  return rows as IUserWithId[];
};

export default {
  create,
  getByUsernameAndPassword,
};
