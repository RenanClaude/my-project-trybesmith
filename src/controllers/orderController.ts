import { Request, Response } from 'express';
// import { getAllOrdersService,
//   queryByUserIdService, updateNewOrderService } from '../services/orderService';
import orderService from '../services/orderService';

const getAllOrdersController = async (req: Request, res: Response) => {
  const allOrders = await orderService.getAllOrdersService();
  return res.status(200).json(allOrders);
};

const NewOrderController = async (req: Request, res: Response) => {
  const { userId, productIds } = req.body;

  const verifyUserId = await orderService.queryByUserIdService(userId);
  if (!verifyUserId) { return res.status(404).json({ message: '"userId" not found' }); }

  await orderService.updateNewOrderService(userId, productIds);
  return res.status(201).json({ userId, productIds });
};

export default { NewOrderController, getAllOrdersController };