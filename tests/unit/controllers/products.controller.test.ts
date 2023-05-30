import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/services/productService';
import { Product } from '../../../src/types/Product';
import {newProductController} from '../../../src/controllers/productController'

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Caso de sucesso - Adicionar novo produto', async () => {
    //arrange
    req.body = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }

    const serviceResponse: Product = {
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }
    sinon.stub(productService, 'newProductService').resolves(serviceResponse)

    //act
    await newProductController(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(201);
  })
});
