import { Router } from 'express';
import UserController from '@Adapter/Controller/Users/UserController';
import isAuthenticated from '@Domain/Middlewares/isAuthenticated';
import isAdmin from '@Domain/Middlewares/isAdmin';
import { Joi, Segments, celebrate } from 'celebrate';
import { cpf, cnpj } from 'cpf-cnpj-validator';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      full_name: Joi.string().min(3).required().messages({
        'string.min': 'Full name must have at least {#limit} characters',
        'string.empty': 'Full name cannot be empty',
        'any.required': 'Full name is required',
      }),
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
      cpf_cnpj: Joi.string()
        .regex(/^([0-9]{11}|[0-9]{14})$/)
        .custom((value, helpers) => {
          if (value.length === 11 && !cpf.isValid(value)) {
            return helpers.message({
              custom: 'Invalid CPF',
            });
          }

          if (value.length === 14 && !cnpj.isValid(value)) {
            return helpers.message({
              custom: 'Invalid CNPJ',
            });
          }

          return value;
        })
        .required()
        .messages({
          'string.empty': 'CPF/CNPJ cannot be empty',
          'string.pattern.base':
            'Invalid CPF/CNPJ format. Please provide either 11 digits for CPF or 14 digits for CNPJ.',
          'any.required': 'CPF/CNPJ is required',
        }),
    }),
  }),
  usersController.create,
);

usersRouter.use(isAuthenticated);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().message('Id must be a valid GUID'),
    }),
  }),
  usersController.find,
);

usersRouter.get('/', isAdmin, usersController.list);

usersRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().uuid().required().messages({
        'string.guid': 'Id must be a valid GUID',
        'string.empty': 'Id cannot be empty',
        'any.required': 'Id is required',
      }),
      full_name: Joi.string().min(3).messages({
        'string.min': 'Full name must have at least {#limit} characters',
        'string.empty': 'Full name cannot be empty',
      }),
      email: Joi.string().email().messages({
        'string.email': 'Invalid email address',
        'string.empty': 'Email cannot be empty',
      }),
      password: Joi.string().min(8).messages({
        'string.min': 'Password must have at least {#limit} characters',
        'string.empty': 'Password cannot be empty',
      }),
      cpf_cnpj: Joi.string()
        .regex(/^([0-9]{11}|[0-9]{14})$/)
        .custom((value, helpers) => {
          if (value.length === 11 && !cpf.isValid(value)) {
            return helpers.message({
              custom: 'Invalid CPF',
            });
          }

          if (value.length === 14 && !cnpj.isValid(value)) {
            return helpers.message({
              custom: 'Invalid CNPJ',
            });
          }

          return value;
        })
        .messages({
          'string.empty': 'CPF/CNPJ cannot be empty',
          'string.pattern.base':
            'Invalid CPF/CNPJ format. Please provide either 11 digits for CPF or 14 digits for CNPJ.',
        }),
    }),
  }),
  usersController.update,
);

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().message('Id must be a valid GUID'),
    }),
  }),
  usersController.delete,
);

export default usersRouter;
