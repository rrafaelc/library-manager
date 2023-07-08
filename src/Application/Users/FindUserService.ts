import { FindUserRequest } from '@Adapter/Controller/Users/FindUserRequest';
import { User } from '@prisma/client';
import { IFindUserService } from './IFindUserService';
import { UserRepository } from '@Domain/Users/UserRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';

class FindUserService implements IFindUserService {
  private userRepository = new UserRepository();

  public async execute({ id }: FindUserRequest): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('User not found');

    return user;
  }
}

export default FindUserService;
