import { NewOrderController } from './../../../src/controllers/orderController';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Caso de sucesso - Criar novo pedido a um produto existente e retornar status 201', async () => {
    //arrange
    req.body = {
      userId: 3,
      productIds: [1, 2]
    }

    //act
    await NewOrderController(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(201);
  })
});
