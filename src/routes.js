import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/SecUserController';
import hidrantesController from './app/controllers/HidrantesController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/hidrantes', hidrantesController.store);

routes.use(authMiddleware);
routes.put('/sessions', UserController.update);

/*
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
Coloca aqui para os middlewares valerem para todas as rotas que estao debaixo
 Para atualizar os dados cadastrais
routes.put('/users', UserController.update);
*/
export default routes;
