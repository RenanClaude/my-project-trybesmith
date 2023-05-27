import { Request, Response } from 'express';
import getAllOrdersService from '../services/orderService';

const getAllOrdersController = async (req: Request, res: Response) => {
  const allOrders = await getAllOrdersService();

  return res.status(200).json(allOrders);
};

export default getAllOrdersController;