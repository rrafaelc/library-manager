import { DeleteUserRequest } from '@Adapter/Controller/Users/DeleteUserRequest';
import { IDeleteUserService } from './IDeleteUserService';
import { UserRepository } from '@Infrastructure/Repositories/Users/UserRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';

class DeleteUserService implements IDeleteUserService {
  private userRepository = new UserRepository();

  public async execute({ id }: DeleteUserRequest) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new AppError('User not found');

    await this.userRepository.delete(user);
  }
}

export default DeleteUserService;
