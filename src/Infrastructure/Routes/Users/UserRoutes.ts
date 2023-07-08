import { Router } from 'express';
import UserController from '@Adapter/Controller/Users/UserController';
import isAuthenticated from '@Domain/Middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.create);

usersRouter.use(isAuthenticated);
usersRouter.get('/:id', usersController.find);
usersRouter.put('/', usersController.update);
usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
