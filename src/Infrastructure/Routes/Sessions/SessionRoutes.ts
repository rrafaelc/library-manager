import UserSessionController from '@Adapter/Controller/Sessions/SessionController';
import { Router } from 'express';

const sessionRouter = Router();
const sessionController = new UserSessionController();

sessionRouter.post('/', sessionController.create);

export default sessionRouter;
