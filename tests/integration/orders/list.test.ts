import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import OrderModel from '../../../src/database/models/order.model';
// import getAllOrdersService from '../../../src/services/orderService';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Caso de sucesso - Retornar todos os pedidos, com status 200', async () => {
    const allOrders = OrderModel.build({
      id: 6,
      userId: 500,
    })
    sinon.stub(OrderModel, 'findAll').resolves([allOrders])
    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
  })
});
