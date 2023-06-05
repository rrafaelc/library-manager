import { User } from '@prisma/client';
import { CreateUserDto } from '../dtos/createUserDto';

export interface ICreateUserService {
  execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserDto): Promise<User>;
}
