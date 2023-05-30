import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
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

    //act
    await newProductController(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(201);
  })
});
