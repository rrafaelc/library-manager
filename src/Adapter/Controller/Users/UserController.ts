import { Request, Response } from 'express';
import { IBaseController } from '../IBaseController';
import CreateUserService from '@Application/Users/CreateUserService';
import ListUserService from '@Application/Users/ListUserService';
import FindUserService from '@Application/Users/FindUserService';
import UpdateUserService from '@Application/Users/UpdateUserService';
import DeleteUserService from '@Application/Users/DeleteUserService';

export default class UserController implements IBaseController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUser = new FindUserService();

    const user = await findUser.execute({ id });

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { full_name, email, password, cpf_cnpj } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      full_name,
      email,
      password,
      cpf_cnpj,
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;
    const { full_name, email, password, cpf_cnpj } = request.body;

    const updateUser = new UpdateUserService();

    const userUpdated = await updateUser.execute({
      id,
      full_name,
      email,
      password,
      cpf_cnpj,
    });

    return response.json(userUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.sendStatus(204);
  }
}
