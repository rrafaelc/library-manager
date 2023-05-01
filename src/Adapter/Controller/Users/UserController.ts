/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { IBaseController } from '../IBaseController';
import CreateUserDTO from './CreateUserDTO';
import CreateUserService from '@Application/Users/CreateUserService';
export default class UserController implements IBaseController {
  list(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  find(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  async create(request: Request, response: Response): Promise<Response> {
    const data: CreateUserDTO = request.body;

    const createUser = new CreateUserService();

    await createUser.execute(data);

    throw new Error('Method not implemented.');
  }
  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  delete(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
