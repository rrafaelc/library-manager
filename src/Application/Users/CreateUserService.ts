import { hash } from 'bcrypt';
import { ICreateUserService } from './ICreateUserService';

import AppError from '@Domain/Middlewares/Errors/AppError';
import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';
import { UserRepository } from '@Domain/Users/UserRepository';
import { RoleRepository } from '@Domain/Roles/RoleRepository';
import { User } from '@prisma/client';

class CreateUserService implements ICreateUserService {
  private userRepository = new UserRepository();
  private roleRepository = new RoleRepository();

  async execute({
    full_name,
    email,
    password,
    cpf_cnpj,
  }: CreateUserRequest): Promise<User> {
    const hashedPassword = await hash(password, 8);

    const userExists = await this.userRepository.findByCpfCnpj(cpf_cnpj);

    if (userExists)
      throw new AppError(
        `There is already one user with this cpf/cnpj ${cpf_cnpj}`,
      );

    const userExistsEmail = await this.userRepository.findByEmail(email);

    if (userExistsEmail)
      throw new AppError(`There is already one user with this email ${email}`);

    const role = await this.roleRepository.findByName('USER');

    return this.userRepository.create({
      full_name,
      email,
      password: hashedPassword,
      cpf_cnpj,
      roleId: role?.id,
    });
  }
}

export default CreateUserService;
