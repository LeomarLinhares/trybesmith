import dotenv from 'dotenv';
import JWT, { SignOptions } from 'jsonwebtoken';
import { IToken } from '../interfaces/IToken';
import { IUser } from '../interfaces/IUser';
import userModel from '../models/userModel';

dotenv.config();

const secret: string = process.env.JWT_SECRET as string;

const JWTConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default {
  create: async (body: IUser): Promise<IToken | void> => {
    try {
      const { insertId: id } = await userModel.create(body);
      const { username } = body;
      const token = JWT.sign({ id, username }, secret, JWTConfig);
      return { token };
    } catch (error) {
      console.log(error);
    }
  },
};
