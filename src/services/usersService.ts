import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
import { IToken } from '../interfaces/IToken';
import { IUser } from '../interfaces/IUser';
import userModel from '../models/userModel';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'segredoSecretoDoServer';

export default {
  create: async (body: IUser): Promise<IToken | void> => {
    try {
      const { insertId: id } = await userModel.create(body);
      const { username } = body;
      const token = JWT.sign({ id, username }, secret, { algorithm: 'HS256' });
      return { token };
    } catch (error) {
      console.log(error);
    }
  },
};
