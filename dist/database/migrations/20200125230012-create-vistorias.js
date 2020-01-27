"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hidr_vistorias', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_vistoria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo_hidrante: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pressao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    vazao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    condicoes: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acesso: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    instalacao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    pintura: {
      type: Sequelize.STRING,
      allowNull: true,
    },    
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'sec_users', key: 'id' },
      on_update: 'CASCADE',
      on_Delete: 'SET NULL',
    },      
    imagem_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'pub_files', key: 'id' },
      on_update: 'CASCADE',
      on_Delete: 'SET NULL',
    },
    hidrante_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'hidr_hidrantes', key: 'id' },
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
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hidr_vistorias');
  },
};
