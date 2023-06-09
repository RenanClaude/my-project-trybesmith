import { User } from '../types/User';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { TypeResultAllOrders } from '../types/Order';
import UserModel from '../database/models/user.model';

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
  return getResult;
};

const queryByUserIdService = async (userId: number): Promise<User | undefined> => {
  const queryByUserId = await UserModel.findOne({ where: { id: userId } });
  const queryResult = queryByUserId?.dataValues;
  return queryResult;
};

const updateNewOrderService = async (userId: number, productIds: number[])
: Promise<string> => {
  const createdOrder = await OrderModel.create({ userId });
  const newOrderId: number = createdOrder.dataValues.id;

  const updateOrderId = productIds.map((productId) => {
    const result = ProductModel.update(
      { orderId: newOrderId },
      { where: { id: productId } },
    );
    return result;
  });
  await Promise.all(updateOrderId);
  return 'Ok';
};

export default { queryByUserIdService, updateNewOrderService, getAllOrdersService };
