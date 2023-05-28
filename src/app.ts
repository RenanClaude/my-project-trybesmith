import express from 'express';
import { newProductController, getAllProductsController } from './controllers/productController';
import getAllOrdersController from './controllers/orderController';
import { verifyLoginFields } from './middlewares/verifyLogin';
import loginController from './controllers/loginController';
import { verifyNewProductName, verifyNewProductPrice } from './middlewares/verifyProduct';

const app = express();

app.use(express.json());

// endpoint - requisito 1 e 5
app.post('/products', verifyNewProductName, verifyNewProductPrice, newProductController);

// endpoint - requisito 2
app.get('/products', getAllProductsController);

// endpoint - requisito 3
app.get('/orders', getAllOrdersController);

// endpoint - requisito 4
app.post('/login', verifyLoginFields, loginController);

export default app;