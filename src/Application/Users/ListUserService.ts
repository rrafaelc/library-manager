import { User } from '@prisma/client';
import { IListUserService } from './IListUserService';
import { UserRepository } from '@Infrastructure/Repositories/Users/UserRepository';

class ListUserService implements IListUserService {
  private userRepository = new UserRepository();

  public async execute(): Promise<User[]> {
    return this.userRepository.find();
  }
}

export default ListUserService;
