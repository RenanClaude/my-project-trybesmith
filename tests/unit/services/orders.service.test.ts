import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/orderService'

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Caso de sucesso - Update no produto, criar novo pedido e retornar status 201', async () => {
    //arrange
    const newOrder = OrderModel.build({
      id: 4,
      userId: 3
    })

    const body = {
      userId: 3,
      productIds: [1, 2]
    }
    sinon.stub(OrderModel, 'create').resolves(newOrder)

    //act
    const response = await orderService.updateNewOrderService(body.userId, body.productIds);

    //assert
    expect(response).to.be.equal('Ok')
  })
});
