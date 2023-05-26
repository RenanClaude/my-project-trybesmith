import express from 'express';
import newProductController from './controllers/productController';

const app = express();

app.use(express.json());

// endpoint - requisito 1
app.post('/products', newProductController);

export default app;
//