'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
        'roles',
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
          name:{
            type : Sequelize.STRING,
            allowNull: false,
          },
          level: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          description:{
            type: Sequelize.STRING
          },
        });
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('roles');
  }
};
