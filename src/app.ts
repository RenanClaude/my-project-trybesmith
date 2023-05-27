import express from 'express';
import { newProductController, getAllProductsController } from './controllers/productController';
import getAllOrdersController from './controllers/orderController';

const app = express();

app.use(express.json());

// endpoint - requisito 1
app.post('/products', newProductController);

// endpoint - requisito 2
app.get('/products', getAllProductsController);

// endpoint - requisito 3
app.get('/orders', getAllOrdersController);

export default app;