import Sequelize, { Model } from "sequelize";


class Boletim extends Model {
  static init(sequelize) {
    super.init(
      {
        bol_codigo: Sequelize.STRING,
        bol_numero: Sequelize.STRING,
        bol_ano: Sequelize.STRING,
        bol_data: Sequelize.DATEONLY,
        bol_arquivoPDF: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://sentinela.cb.ce.gov.br/publicacoes/_lib/file/doc/boletim/${this.bol_arquivoPDF}`;
          }
        }
      },
      {
        sequelize,
        tableName: 'boletim'
      }
    );
    return this;
  }
}

export default Boletim;
