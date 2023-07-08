import { UpdateUserRequest } from '@Adapter/Controller/Users/UpdateUserRequest';
import { User } from '@prisma/client';
import { IUpdateUserService } from './IUpdateUserService';
import { UserRepository } from '@Domain/Users/UserRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';
import { hash } from 'bcrypt';

class UpdateUserService implements IUpdateUserService {
  private userRepository = new UserRepository();

  public async execute({
    id,
    full_name,
    email,
    password,
    cpf_cnpj,
  }: UpdateUserRequest): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('User not found');

    if (email) {
      const userExists = await this.userRepository.findByEmail(email);

      if (userExists)
        throw new AppError('There is already a user with this email');
    }

    if (cpf_cnpj) {
      const userExists = await this.userRepository.findByCpfCnpj(cpf_cnpj);

      if (userExists)
        throw new AppError('There is already a user with this cpf_cnpj');
    }

    user.full_name = full_name ?? user.full_name;
    user.email = email ?? user.email;
    user.password = password ? await hash(password, 8) : user.password;
    user.cpf_cnpj = cpf_cnpj ?? user.cpf_cnpj;

    await this.userRepository.update(user);

    return user;
  }
}

export default UpdateUserService;
