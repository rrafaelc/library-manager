/* eslint-disable @typescript-eslint/no-explicit-any  */
import CreateUserDTO from 'src/Adapter/Controller/Users/CreateUserDTO';

export interface ICreateUserService {
  execute(data: CreateUserDTO): Promise<any>;
}
