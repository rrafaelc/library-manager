import { CreateUserDto } from '../dtos/createUserDto';
import { UserDto } from '../dtos/userDto';

export interface ICreateUserService {
  execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserDto): Promise<UserDto>;
}
