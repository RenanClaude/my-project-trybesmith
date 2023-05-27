import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import loginService from '../services/loginService';
import { getToken } from '../middlewares/verifyLogin';

const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const queryResult = await loginService(username);

  if (!queryResult || !bcrypt.compareSync(password, queryResult.password)) {
    return res.status(401).json({ message: 'Username or password invalid' }); 
  }

  const token = getToken(queryResult);
  return res.status(200).json({ token });
};

export default loginController;