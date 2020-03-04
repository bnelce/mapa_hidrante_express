import { Router } from 'express';
import cors from 'cors';

import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import SecUserController from './app/controllers/SecUserController';
import HidrantesController from './app/controllers/HidrantesController';
import VistoriasController from './app/controllers/VistoriasController';

import authMiddleware from './app/middlewares/auth';
import DashboardController from './app/controllers/DashboardController';

const routes = new Router();
const upload = multer(multerConfig);


var corsOptions = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    headers: true,
    credentials: true,
  }

routes.post('/sessions', SessionController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/dashboard/hidrantes', DashboardController.hidrantesCount);


routes.post('/hidrantes', HidrantesController.store);
routes.get('/hidrantes', HidrantesController.index);
routes.get('/hidrantes/:id', HidrantesController.show);

routes.get('/vistorias', VistoriasController.index);
routes.post('/vistorias', VistoriasController.store);
routes.get('/vistorias/:id', VistoriasController.show);
routes.put('/vistorias/:id', VistoriasController.update);


routes.get('/users', SecUserController.index);
routes.get('/users/:login', SecUserController.show);
routes.post('/users', SecUserController.store);

//routes.use(authMiddleware);



export default routes;

