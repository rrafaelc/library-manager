import { CreateSessionRequest } from '@Adapter/Controller/Sessions/CreateSessionRequest';
import { CreateSessionResponse } from '@Adapter/Controller/Sessions/CreateSessionResponse';

export interface ICreateSessionService {
  execute({
    email,
    password,
  }: CreateSessionRequest): Promise<CreateSessionResponse>;
}
