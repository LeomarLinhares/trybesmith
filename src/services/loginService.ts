import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
import { IPayload } from '../interfaces/IPayload';
import { IToken } from '../interfaces/IToken';
import userModel from '../models/userModel';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'segredoSecretoDoServer';

export default {
  login: async (
    usernameReq: string,
    passwordReq: string,
  ): Promise<IToken | void> => {
    try {
      const [{ id, username }]: IPayload[] = await userModel
        .getByUsernameAndPassword(usernameReq, passwordReq);
      const token = JWT.sign({ id, username }, secret, { algorithm: 'HS256' });
      return { token };
    } catch (error) {
      console.log(error);
    }
  },
};
