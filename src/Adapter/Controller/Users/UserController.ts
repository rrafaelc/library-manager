/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { IBaseController } from '../IBaseController';
import CreateUserService from '@Application/Users/CreateUserService';
import AppError from '@Domain/Middlewares/Errors/AppError';
export default class UserController implements IBaseController {
  list(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  find(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  async create(request: Request, response: Response): Promise<Response> {
    const {
      fullName,
      email,
      password,
      cpf,
      cellphone,
      address: { street, district, city, state, cep },
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      fullName,
      email,
      password,
      cpf,
      cellphone,
      address: { street, district, city, state, cep },
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
