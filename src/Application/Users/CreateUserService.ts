/* eslint-disable @typescript-eslint/no-explicit-any  */
import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';
import { ICreateUserService } from './interfaces/ICreateUserService';

import AppError from '@Domain/Middlewares/Errors/AppError';

class CreateUserService implements ICreateUserService {
  async execute(data: CreateUserRequest): Promise<any> {
    console.log(data);

    throw new AppError('Method not implemented.');
  }
}

export default CreateUserService;
