import { NextFunction, Request, Response } from 'express';
import AppError from './Errors/AppError';

export default function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const role = request.user.role;

  if (role !== 'ADMIN') throw new AppError('Unauthorized Access', 403);

  return next();
}
