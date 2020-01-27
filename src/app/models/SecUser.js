"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _Hidrantes = require('../models/Hidrantes'); var _Hidrantes2 = _interopRequireDefault(_Hidrantes);
var _Files = require('../models/Files'); var _Files2 = _interopRequireDefault(_Files);

class SecUser extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        login: _sequelize2.default.STRING,
        pswd: _sequelize2.default.STRING,
        password: _sequelize2.default.VIRTUAL,
        name: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        active: _sequelize2.default.STRING,
        activation_code: _sequelize2.default.STRING,
        priv_admin: _sequelize2.default.STRING,
        usr_active: _sequelize2.default.STRING,        
      },
      {
        sequelize,
      }
    );
    /*
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });*/
    return this;
  }

    static associate(models) {
       this.belongsTo(models.Files, { foreignKey: 'avatar_id', as: 'avatar'});
       this.hasMany(models.Hidrantes, { foreignKey: 'user_id', as: 'hidrantes'});       
    }
  }

exports. default = SecUser;
