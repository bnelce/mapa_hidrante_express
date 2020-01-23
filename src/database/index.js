import Sequelize from 'sequelize';

import User from '../app/models/user';

import Hidrantes from '../app/models/Hidrantes';

import databaseConfig from '../config/database';

const models = [User, Hidrantes];

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
