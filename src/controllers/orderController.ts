import { Request, Response } from 'express';
import { getAllOrdersService,
  queryByUserIdService, updateNewOrderService } from '../services/orderService';

export const getAllOrdersController = async (req: Request, res: Response) => {
  const allOrders = await getAllOrdersService();
  return res.status(200).json(allOrders);
};

export const NewOrderController = async (req: Request, res: Response) => {
  const { userId, productIds } = req.body;

  const verifyUserId = await queryByUserIdService(userId);
  if (!verifyUserId) { return res.status(404).json({ message: '"userId" not found' }); }

  await updateNewOrderService(userId, productIds);
  return res.status(201).json({ userId, productIds });
};
