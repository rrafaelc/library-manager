import UserController from '@Adapter/Controller/Users/UserController';
import isAdmin from '@Domain/Middlewares/isAdmin';
import isAuthenticated from '@Domain/Middlewares/isAuthenticated';
import { Router } from 'express';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.create);

usersRouter.use(isAuthenticated);
usersRouter.get('/', isAdmin, usersController.list);

export default usersRouter;
