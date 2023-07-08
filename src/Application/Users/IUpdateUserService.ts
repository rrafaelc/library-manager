import { UpdateUserRequest } from '@Adapter/Controller/Users/UpdateUserRequest';
import { User } from '@prisma/client';

export interface IUpdateUserService {
  execute({
    id,
    full_name,
    email,
    password,
    cpf_cnpj,
  }: UpdateUserRequest): Promise<User>;
}
