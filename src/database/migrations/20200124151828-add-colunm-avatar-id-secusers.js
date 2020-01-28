'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sec_users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'pub_files', key: 'id' },
      onUpdated: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColunm('sec_users', 'avatar_id');
  }
};
