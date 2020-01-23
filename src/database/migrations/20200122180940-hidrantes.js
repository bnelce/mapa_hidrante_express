module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hidrantes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      end_rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hidrometro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagem_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: true,
        references: { model: 'users', key: 'id' },
        on_update: 'CASCADE',
        on_Delete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('hidrantes');
  },
};
