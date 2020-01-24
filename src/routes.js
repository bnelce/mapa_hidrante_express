import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
//import SecUserController from './app/controllers/SecUserController';
import HidrantesController from './app/controllers/HidrantesController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);


routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/hidrantes', HidrantesController.store);
//routes.post('/files', upload.single('file'), FileController.store);
routes.post('/files', upload.single('file'), (req,res) => {
    return res.json(req.file);
})


export default routes;

