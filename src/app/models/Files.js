import Sequelize, { Model } from "sequelize";


class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          }
        }
      },
      {
        sequelize,
        tableName: 'pub_files'
      }
    );
    return this;
  }
}

export default Files;