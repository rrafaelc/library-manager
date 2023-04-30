import { Request, Response } from 'express';

export interface IBaseController {
  list(request: Request, response: Response): Promise<Response>;
  find(request: Request, response: Response): Promise<Response>;
  create(request: Request, response: Response): Promise<Response>;
  update(request: Request, response: Response): Promise<Response>;
  delete(request: Request, response: Response): Promise<Response>;
}
