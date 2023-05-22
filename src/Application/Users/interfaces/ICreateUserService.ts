/* eslint-disable @typescript-eslint/no-explicit-any  */
import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';

export interface ICreateUserService {
  execute({
    fullName,
    email,
    password,
    cpf,
    cellphone,
    address: { street, district, city, state, cep },
  }: CreateUserRequest): Promise<any>;
}
