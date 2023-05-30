import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import OrderModel from '../../../src/database/models/order.model';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  // it('Caso de sucesso - Fazer o update do produto com um novo pedido retornando status 201', async () => {
  //   const newOrder = OrderModel.build({
  //     id: 4,
  //     userId: 1
  //   })
    
  //   sinon.stub(OrderModel, 'create').resolves(newOrder)
    
  //   chai.request(app)
  // .get('/protected')
  // .auth('user', 'pass')
  //   //chai.request faz a requisição para um servidor, no caso, o app do express
  //   const response = await chai.request(app).post('/orders').send({
  //    userId: 1,
  //    productIds: [1, 2]
  //   });

  //   expect(response.status).to.be.equal(201);
  // })
});
