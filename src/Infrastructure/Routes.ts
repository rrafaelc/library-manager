import { Router } from 'express';
import usersRouter from './Users/UserRoutes';
import sessionRouter from './Sessions/SessionRoutes';
import isAuthenticated from '@Domain/Middlewares/isAuthenticated';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/session', sessionRouter);

// Testing

routes.use('/loggedin', isAuthenticated, (request, response) => {
  console.log(request.user);

  response.send('Logged In!');
});

export default routes;
