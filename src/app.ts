import express from 'express';
import productController from './controllers/productController';

const app = express();

app.use(express.json());

// endpoint - requisito 1
app.post('/products', productController.newProductController);

// endpoint - requisito 2
app.get('/products', productController.getAllProductsController);

export default app;