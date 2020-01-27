"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//import Sequelize from 'sequelize';
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _Hidrantes = require('../app/models/Hidrantes'); var _Hidrantes2 = _interopRequireDefault(_Hidrantes);
var _SecUser = require('../app/models/SecUser'); var _SecUser2 = _interopRequireDefault(_SecUser);
var _Vistoria = require('../app/models/Vistoria'); var _Vistoria2 = _interopRequireDefault(_Vistoria);
var _Files = require('../app/models/Files'); var _Files2 = _interopRequireDefault(_Files);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [_SecUser2.default, _Hidrantes2.default, _Files2.default, _Vistoria2.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
    
  } 
  
  
}

exports. default = new Database();
