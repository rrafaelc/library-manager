import UserController from '@Adapter/Controller/Users/UserController';
import { Router } from 'express';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.create);

export default usersRouter;
