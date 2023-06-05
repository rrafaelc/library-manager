import { hash } from 'bcrypt';
import { ICreateUserService } from './interfaces/ICreateUserService';

import AppError from '@Domain/Middlewares/Errors/appError';
import { CreateUserDto } from './dtos/createUserDto';
import { UserRepository } from '@Domain/Users/userRepository';
import { User } from '@prisma/client';

class CreateUserService implements ICreateUserService {
  private userRepository = new UserRepository();

  async execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserDto): Promise<User> {
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
      ...userCreated,
      password: '',
    };
  }
}

export default CreateUserService;
