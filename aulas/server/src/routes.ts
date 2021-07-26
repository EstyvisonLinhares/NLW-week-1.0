import express, { response } from 'express';

import PointsController from './controllers/PointsController';
import ItensController from './controllers/ItensController';

// index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;