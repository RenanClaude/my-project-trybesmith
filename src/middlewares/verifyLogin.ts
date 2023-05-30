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

const secret: string = process.env.JWT_SECRET || 'secret';

const getToken = (userData: User) => {
  const { id, username } = userData;
  const payload = { id, username };

  const token = jwt.sign(payload, secret);
  return token;
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

export { verifyLoginFields, getToken, verifyToken };