'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'tags',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        prio: {
          type: Sequelize.INTEGER,
          allowNull:false
        }
      })
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('tags');
  }
};
