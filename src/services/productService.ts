import { Product } from '../types/Product';
import ProductModel from '../database/models/product.model';

const newProductService = async (product: Product): Promise<Product> => {
  const newProduct = await ProductModel.create({ 
    name: product.name,
    price: product.price, 
    orderId: product.orderId,
  });
  // console.log(newProduct.dataValues);
  return newProduct.dataValues;
};
// newProductService({ name: 'Nome de produto caro', price: '1.000.000 de btc', orderId: 171 });

const getAllProductsService = async (): Promise<Product[]> => {
  const allProducts = await ProductModel.findAll();
  const result = allProducts.map((product) => product.dataValues);
  // console.log(result);
  return result;
};
// getAllProductsService();

export default { newProductService, getAllProductsService };