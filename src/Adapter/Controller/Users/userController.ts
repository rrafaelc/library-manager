import { Request, Response } from 'express';
import { IBaseController } from '../IBaseController';
import CreateUserService from '@Application/Users/createUserService';

export default class UserController implements IBaseController {
  list(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  find(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  async create(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService();

    const { full_name, email, password, cpf_cnpj } = request.body;

    const user = await createUser.execute({
      full_name,
      email,
      password,
      cpf_cnpj,
    });

    return response.json(user);
  }

  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  delete(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
