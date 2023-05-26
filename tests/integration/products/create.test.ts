import sinon from 'sinon';
// sinon - para fazer o mock e stub
import chai, { expect } from 'chai';
//chai - para fazer asserções (expect)
import Mocha from 'mocha';
//Mocha - por meio dele que os testes são rodados - describe, it, test
import chaiHttp from 'chai-http';
//chaiHttp é uma extensão do chai
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Caso de sucesso - Retornar dados do novo produto com status 201', async () => {
    //chai.request faz a requisição para um servidor, no caso, o app do express
    const newProduct = ProductModel.build({
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    })

    sinon.stub(ProductModel, 'create').resolves(newProduct)

    const response = await chai.request(app).post('/products').send({
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    });

    expect(response.status).to.be.equal(201);
  })
});
