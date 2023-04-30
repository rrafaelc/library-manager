/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { IBaseController } from '../IBaseController';

export default class UserController implements IBaseController {
  list(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  find(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  create(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  delete(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
