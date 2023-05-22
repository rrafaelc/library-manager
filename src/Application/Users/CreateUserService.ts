/* eslint-disable @typescript-eslint/no-explicit-any  */
import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';
import { ICreateUserService } from './interfaces/ICreateUserService';

import AppError from '@Domain/Middlewares/Errors/AppError';

class CreateUserService implements ICreateUserService {
  execute({
    fullName,
    email,
    password,
    cpf,
    cellphone,
    address: { street, district, city, state, cep },
  }: CreateUserRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve({
        fullName,
        email,
        password,
        cpf,
        cellphone,
        address: { street, district, city, state, cep },
      });
    });
  }
}

export default CreateUserService;
