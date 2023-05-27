import { User } from 'src/types/User';
import UserModel from '../database/models/user.model';

const loginService = async (username: string): Promise<User | undefined> => {
  const queryByUsername = await UserModel.findOne({ where: { username } });
  const queryResult = queryByUsername?.dataValues;
  // console.log('RESULTADO AQUI!:', queryResult);
  return queryResult;
};
// loginService('Helga');

export default loginService;