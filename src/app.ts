import express from 'express';
import { newProductController, getAllProductsController } from './controllers/productController';
import orderController from './controllers/orderController';
import { verifyLoginFields, verifyToken } from './middlewares/verifyLogin';
import loginController from './controllers/loginController';
import { verifyNewProductName, verifyNewProductPrice } from './middlewares/verifyProduct';
import { verifyNewOrderProductIds, verifyNewOrderUserId } from './middlewares/verifyNewOrder';

const app = express();

app.use(express.json());

// endpoint - requisito 1 e 5
app.post('/products', verifyNewProductName, verifyNewProductPrice, newProductController);

// endpoint - requisito 2
app.get('/products', getAllProductsController);

// endpoint - requisito 3
app.get('/orders', orderController.getAllOrdersController);

// endpoint - requisito 4
app.post('/login', verifyLoginFields, loginController);

// endpoint - requisito 6
app.post(
  '/orders',
  verifyToken,
  verifyNewOrderUserId,
  verifyNewOrderProductIds,
  orderController.NewOrderController,
);

export default app;