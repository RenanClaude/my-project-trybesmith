import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types/User';

const verifyLoginFields = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' }); 
  }
  next();
};

const getToken = (userData: User) => {
  const { id, username } = userData;

  const secret: string = process.env.JWT_SECRET || 'secret';
  const payload = { id, username };

  const token = jwt.sign(payload, secret);
  return token;
};

export { verifyLoginFields, getToken };