import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { TypeResultAllOrders } from '../types/Order';

const getProductIds = (productIds?: { id: number }[]): number[] => 
  (productIds ? productIds.map((obj) => obj.id) : []);

const getAllOrdersService = async (): Promise<TypeResultAllOrders[]> => {
  const allOrders = await OrderModel.findAll({ 
    include: [{
      model: ProductModel, as: 'productIds', attributes: ['id'],
    },
    ] });

  const getResult = allOrders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: getProductIds(order.dataValues.productIds),
  }));
  // console.log(getResult);
  return getResult;
};
// getAllOrdersService();

export default getAllOrdersService;