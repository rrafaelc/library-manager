import UserController from '@Adapter/Controller/Users/UserController';
import isAuthenticated from '@Domain/Middlewares/isAuthenticated';
import { Router } from 'express';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.create);

usersRouter.use(isAuthenticated);
usersRouter.get('/:id', usersController.find);
usersRouter.put('/', usersController.update);
usersRouter.delete('/', usersController.delete);

export default usersRouter;
