import express from 'express';
import { newProductController, getAllProductsController } from './controllers/productController';

const app = express();

app.use(express.json());

// endpoint - requisito 1
app.post('/products', newProductController);

// endpoint - requisito 2
app.get('/products', getAllProductsController);

export default app;