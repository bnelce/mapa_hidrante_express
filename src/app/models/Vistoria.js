import Sequelize, { Model } from "sequelize";


class Vistoria extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_vistoria: Sequelize.STRING,
        tipo_hidrante: Sequelize.STRING,
        cor: Sequelize.STRING,
        pressao: Sequelize.STRING,
        vazao: Sequelize.STRING,
        condicoes: Sequelize.STRING,
        acesso: Sequelize.STRING,
        instalacao: Sequelize.STRING,
        pintura: Sequelize.STRING,
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

export default Vistoria;
