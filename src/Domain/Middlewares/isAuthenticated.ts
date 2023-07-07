import { NextFunction, Request, Response } from 'express';
import AppError from './Errors/AppError';
import { verify } from 'jsonwebtoken';
import authConfig from './Config/Auth';
import { ITokenPayload } from './ITokenPayload';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('JWT token is missing');

  const [, token] = authHeader.split(' ');

  const secret = authConfig.jwt.secret;

  if (!secret) throw new AppError('Secret key is missing');

  try {
    const decode = verify(token, secret);

    const { sub, role } = decode as ITokenPayload;

    request.user = {
      id: sub,
      role,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token');
  }
}
