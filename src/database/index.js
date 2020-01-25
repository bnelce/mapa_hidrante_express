import Sequelize from 'sequelize';

import SecUser from '../app/models/SecUser';
import Files from '../app/models/Files';

import Hidrantes from '../app/models/Hidrantes';

import databaseConfig from '../config/database';

const models = [SecUser, Hidrantes, Files];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
