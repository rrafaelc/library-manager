import CreateSessionService from '@Application/Sessions/CreateSessionService';
import { Request, Response } from 'express';

export default class UserSessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSessionUser = new CreateSessionService();

    const user = await createSessionUser.execute({ email, password });

    return response.json(user);
  }
}
