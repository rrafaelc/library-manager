import UserSessionController from '@Adapter/Controller/Sessions/SessionController';
import { Joi, Segments, celebrate } from 'celebrate';
import { Router } from 'express';

const sessionRouter = Router();
const sessionController = new UserSessionController();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required().messages({
        'string.email': 'Invalid email address',
        'string.empty': 'Email cannot be empty',
        'any.required': 'Email is required',
      }),
      password: Joi.string().min(8).required().messages({
        'string.min': 'Password must have at least {#limit} characters',
        'string.empty': 'Password cannot be empty',
        'any.required': 'Password is required',
      }),
    }),
  }),
  sessionController.create,
);

export default sessionRouter;
