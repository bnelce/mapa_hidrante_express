"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);


class Vistoria extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        tipo_vistoria: _sequelize2.default.STRING,
        tipo_hidrante: _sequelize2.default.STRING,
        cor: _sequelize2.default.STRING,
        pressao: _sequelize2.default.STRING,
        vazao: _sequelize2.default.STRING,
        condicoes: _sequelize2.default.STRING,
        acesso: _sequelize2.default.STRING,
        instalacao: _sequelize2.default.STRING,
        pintura: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: 'hidr_vistorias'
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.SecUser, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Files, { foreignKey: 'imagem_id', as: 'imagem' });
    this.belongsTo(models.Hidrantes, { foreignKey: 'hidrante_id', as: 'hidrante' });

}
}

exports. default = Vistoria;
