import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Caso de sucesso - Retornar todos os produtos, com status 200', async () => {
    const allProducts = ProductModel.build({
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    })

    sinon.stub(ProductModel, 'findAll').resolves([allProducts])

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
  })
});
