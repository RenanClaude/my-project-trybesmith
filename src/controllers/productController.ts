import { Request, Response } from 'express';
import productService from '../services/productService';

const newProductController = async (req: Request, res: Response) => {
  const newProduct = await productService.newProductService(req.body);
  const { orderId, ...result } = newProduct;

  return res.status(201).json(result);
};

export default newProductController;