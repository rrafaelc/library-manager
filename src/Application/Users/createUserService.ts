import { hash } from 'bcrypt';
import { ICreateUserService } from './interfaces/ICreateUserService';

import AppError from '@Domain/Middlewares/Errors/appError';
import { CreateUserDto } from './dtos/createUserDto';
import { UserRepository } from '@Domain/Users/userRepository';
import { UserDto } from './dtos/userDto';

class CreateUserService implements ICreateUserService {
  private userRepository = new UserRepository();

  async execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserDto): Promise<UserDto> {
    const hashedPassword = await hash(password, 8);

    const userExists = await this.userRepository.findByCpfCnpj(cpf_cnpj);

    if (userExists)
      throw new AppError(
        `There is already one user with this cpf/cnpj ${cpf_cnpj}`,
      );

    const userExistsEmail = await this.userRepository.findByEmail(email);

    if (userExistsEmail)
      throw new AppError(`There is already one user with this email ${email}`);

    const userCreated = await this.userRepository.create({
      full_name,
      email,
      password: hashedPassword,
      cpf_cnpj,
    });

    return {
      id: userCreated.id,
      full_name: userCreated.full_name,
      email: userCreated.email,
      cpf_cnpj: userCreated.cpf_cnpj,
      created_at: userCreated.created_at,
      updated_at: userCreated.updated_at,
    };
  }
}

export default CreateUserService;
