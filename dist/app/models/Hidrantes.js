"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Hidrantes extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {        
        numero: _sequelize2.default.STRING,
        tipo: _sequelize2.default.STRING,
        cor: _sequelize2.default.STRING,
        cep: _sequelize2.default.STRING,
        end_rua: _sequelize2.default.STRING,
        end_numero: _sequelize2.default.STRING,
        municipio: _sequelize2.default.STRING,
        uf: _sequelize2.default.STRING,
        latitude: _sequelize2.default.STRING,
        longitude: _sequelize2.default.STRING,
        hidrometro: _sequelize2.default.STRING,
        ativo: _sequelize2.default.INTEGER       
      },
      {
        sequelize,
        tableName: 'hidr_hidrantes'
      }

    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.SecUser, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Files, { foreignKey: 'imagem_id', as: 'imagem' });
    this.hasMany(models.Vistoria, { foreignKey: 'hidrante_id', as: 'vistorias' });
    

  }
}

exports. default = Hidrantes;
