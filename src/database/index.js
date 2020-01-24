import Sequelize from 'sequelize';

import SecUser from '../app/models/SecUser';

import Hidrantes from '../app/models/Hidrantes';

import databaseConfig from '../config/database';

const models = [SecUser, Hidrantes];

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
