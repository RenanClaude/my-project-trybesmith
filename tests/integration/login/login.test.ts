import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Caso de sucesso - Login feito e token gerado', async () => {
    const userData = UserModel.build({
      id: 1,
      username: 'Manoel',
      vocation: 'Vender pão',
      level: 1000,
      password: '$2a$10$d9sM38UYBmSXxezGnRTFnux70OQ50s/hcTMii04agFpmZOnXeB5Ea'
    })
    
    sinon.stub(UserModel, 'findOne').resolves(userData)
    //chai.request faz a requisição para um servidor, no caso, o app do express
    const response = await chai.request(app).post('/login').send({
      username: 'Manoel',
      password: 'Ora Pois'
    });

    expect(response.status).to.be.equal(200);
  })
});
