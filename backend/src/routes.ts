import { Router } from 'express';
import PersonController from './controllers/PersonController'
const routes = Router();

const personController = new PersonController()



routes.get('/person', personController.index)
routes.get('/person/:id', personController.show)
routes.post('/person', personController.createPerson)
export default routes;