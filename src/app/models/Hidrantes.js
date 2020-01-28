import Sequelize, { Model } from 'sequelize';

class Hidrantes extends Model {
  static init(sequelize) {
    super.init(
      {        
        numero: Sequelize.STRING,
        tipo: Sequelize.STRING,
        cor: Sequelize.STRING,
        cep: Sequelize.STRING,
        end_rua: Sequelize.STRING,
        end_numero: Sequelize.STRING,
        municipio: Sequelize.STRING,
        uf: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
        hidrometro: Sequelize.STRING,
        ativo: Sequelize.INTEGER       
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

export default Hidrantes;
