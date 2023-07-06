import { User } from '@prisma/client';
import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';

export interface ICreateUserService {
  execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserRequest): Promise<User>;
}
