import orderController from './../../../src/controllers/orderController';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
// import { queryByUserIdService } from '../../../src/services/orderService';
import orderService from '../../../src/services/orderService';
import { User } from '../../../src/types/User';

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

    const user: User = {
      id: 3,
      username: 'x',
      vocation: 'y',
      level: 1,
      password: 'z'
    }

    sinon.stub(orderService, 'queryByUserIdService').resolves(user)
    //act
    await orderController.NewOrderController(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(201);
  })
});
