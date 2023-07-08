import { DeleteUserRequest } from '@Adapter/Controller/Users/DeleteUserRequest';

export interface IDeleteUserService {
  execute({ id }: DeleteUserRequest): void;
}
