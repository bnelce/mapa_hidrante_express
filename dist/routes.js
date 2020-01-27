"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _FileController = require('./app/controllers/FileController'); var _FileController2 = _interopRequireDefault(_FileController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _SecUserController = require('./app/controllers/SecUserController'); var _SecUserController2 = _interopRequireDefault(_SecUserController);
var _HidrantesController = require('./app/controllers/HidrantesController'); var _HidrantesController2 = _interopRequireDefault(_HidrantesController);
var _VistoriasController = require('./app/controllers/VistoriasController'); var _VistoriasController2 = _interopRequireDefault(_VistoriasController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();
const upload = _multer2.default.call(void 0, _multer4.default);


routes.post('/sessions', _SessionController2.default.store);
routes.post('/files', upload.single('file'), _FileController2.default.store);

routes.use(_auth2.default);

routes.post('/hidrantes', _HidrantesController2.default.store);
routes.get('/hidrantes', _HidrantesController2.default.index);
routes.get('/hidrantes/:id', _HidrantesController2.default.show);

routes.get('/vistorias', _VistoriasController2.default.index);
routes.post('/vistorias', _VistoriasController2.default.store);
routes.get('/vistorias/:id', _VistoriasController2.default.show);
routes.put('/vistorias/:id', _VistoriasController2.default.update);


routes.get('/users', _SecUserController2.default.index);
routes.get('/users/:login', _SecUserController2.default.show);
routes.post('/users', _SecUserController2.default.store);




exports. default = routes;

