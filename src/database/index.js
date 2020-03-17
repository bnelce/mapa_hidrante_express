//import Sequelize from 'sequelize';
import Sequelize from 'sequelize';

import Hidrantes from '../app/models/Hidrantes';
import SecUser from '../app/models/SecUser';
import Vistoria from '../app/models/Vistoria';
import Files from '../app/models/Files';
import Boletim from '../app/models/sentinela/Boletim';

import databaseConfig from '../config/database';

const models = [SecUser, Hidrantes, Files, Vistoria, Boletim];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
    
  } 
  
  
}

export default new Database();
