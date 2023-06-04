import { hash } from 'bcrypt';
import { ICreateUserService } from './interfaces/ICreateUserService';

import AppError from '@Domain/Middlewares/Errors/appError';
import { User } from '@prisma/client';
import { CreateUserDto } from './dtos/createUserDto';
import { UserRepository } from '@Domain/Users/userRepository';

class CreateUserService implements ICreateUserService {
  private userRepository = new UserRepository();

  async execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(password, 8);

    return await this.userRepository.create({
      full_name,
      email,
      password: hashedPassword,
      cpf_cnpj,
      is_active: 'A',
    });
  }
}

export default CreateUserService;
