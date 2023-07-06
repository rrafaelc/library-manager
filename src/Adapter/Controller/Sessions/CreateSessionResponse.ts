import { User } from '@prisma/client';

export interface CreateSessionResponse {
  user: User;
  token: string;
}
