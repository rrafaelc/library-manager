import { CreateSessionRequest } from '@Adapter/Controller/Sessions/CreateSessionRequest';
import { CreateSessionResponse } from '@Adapter/Controller/Sessions/CreateSessionResponse';
import { ICreateSessionService } from './ICreateSessionService';
import AppError from '@Domain/Middlewares/Errors/AppError';
import { UserRepository } from '@Domain/Users/UserRepository';
import { RoleRepository } from '@Domain/Roles/RoleRepository';
import { compare } from 'bcrypt';
import authConfig from '@Domain/Middlewares/Config/Auth';
import { sign } from 'jsonwebtoken';

class CreateSessionService implements ICreateSessionService {
  private userRepository = new UserRepository();
  private roleRepository = new RoleRepository();

  public async execute({
    email,
    password,
  }: CreateSessionRequest): Promise<CreateSessionResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError('Incorrect e-mail/password combination', 401);

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed)
      throw new AppError('Incorrect e-mail/password combination', 401);

    if (!user.roleId) throw new AppError('Undefined role for user', 403);

    const role = await this.roleRepository.findById(user.roleId);

    if (!role) throw new AppError('Role not found', 401);

    const secretKey = authConfig.jwt.secret;

    if (!secretKey) throw new AppError('Secret key is missing');

    const token = sign({ role: role.name }, secretKey, {
      subject: user.id.toString(),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionService;
