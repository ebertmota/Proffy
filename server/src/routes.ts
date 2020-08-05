import { Router } from 'express';


const routes = Router();
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.get('/classes', ClassesController.index);
routes.post('/classes', ClassesController.create);

routes.post('/connections', ConnectionsController.create);
routes.get('/connections', ConnectionsController.index);

export default routes;