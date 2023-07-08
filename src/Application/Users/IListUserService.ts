import { User } from '@prisma/client';

export interface IListUserService {
  execute(): Promise<User[]>;
}
