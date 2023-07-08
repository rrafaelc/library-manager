import { FindUserRequest } from '@Adapter/Controller/Users/FindUserRequest';
import { User } from '@prisma/client';

export interface IFindUserService {
  execute({ id }: FindUserRequest): Promise<User>;
}
