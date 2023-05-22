/* eslint-disable @typescript-eslint/no-explicit-any  */
import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';

export interface ICreateUserService {
  execute(data: CreateUserRequest): Promise<any>;
}
