import UserController from '@Adapter/Controller/Users/userController';
import { Router } from 'express';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.create);

export default usersRouter;
