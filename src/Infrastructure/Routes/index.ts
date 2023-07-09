import { Router } from 'express';
import usersRouter from './Users/UserRoutes';
import sessionRouter from './Sessions/SessionRoutes';
import isAuthenticated from '@Domain/Middlewares/isAuthenticated';
import isAdmin from '@Domain/Middlewares/isAdmin';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/session', sessionRouter);

// Testing
routes.use(isAuthenticated);
routes.use('/loggedin', (request, response) => {
  console.log(request.user);

  response.send('Logged In!');
});

routes.use('/admin', isAdmin, (request, response) => {
  console.log(request.user);

  response.send('Admin Logged In!');
});

export default routes;
