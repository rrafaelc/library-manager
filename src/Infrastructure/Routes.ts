import { Router } from 'express';
import usersRouter from './Users/UserRoutes';
import sessionRouter from './Sessions/SessionRoutes';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/session', sessionRouter);

export default routes;
