import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// GET
// POST
// PUT
// DELETE

// Corpo (Request Body): Dados para criação ou att de um Registro (request.body)
// Route Params: Identificar qual recurso atualizar ou deletar (request.params)
// Query Params: Paginação, filtros, ordenação (request.query)

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;