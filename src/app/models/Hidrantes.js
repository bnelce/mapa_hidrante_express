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
        imagem_id: Sequelize.STRING,
        user_id: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'pub_hidrantes'
      }
    );
    
  }
  static associate(models) {
    this.belongsTo(models.Files, { foreignKey: 'imagem_id', as: 'imagem' });
    this.belongsTo(models.SecUser, { foreignKey: 'user_id', as: 'usuario_cadastro' });

  }
}

export default Hidrantes;
