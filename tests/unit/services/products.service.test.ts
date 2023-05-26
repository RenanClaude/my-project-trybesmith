import { expect } from 'chai';
import sinon from 'sinon';
import productService from '../../../src/services/productService';
import ProductModel from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Caso de sucesso - Adicionar novo produto', async () => {
    //arrange
    const newProduct = ProductModel.build({
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    })

    const body = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }
    sinon.stub(ProductModel, 'create').resolves(newProduct)

    //act
    const response = await productService.newProductService(body);

    //assert
    expect(response).to.be.equal(newProduct.dataValues)
  })
});
