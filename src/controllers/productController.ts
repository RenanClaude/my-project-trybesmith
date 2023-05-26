import { Request, Response } from 'express';
import productService from '../services/productService';

const newProductController = async (req: Request, res: Response) => {
  const newProduct = await productService.newProductService(req.body);
  const { orderId, ...result } = newProduct;

  return res.status(201).json(result);
};

const getAllProductsController = async (req: Request, res: Response) => {
  const allProducts = await productService.getAllProductsService();
  return res.status(200).json(allProducts);
};

export { newProductController, getAllProductsController };