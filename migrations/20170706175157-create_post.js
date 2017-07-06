'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'posts',
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
        creator: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        header: {
          type: Sequelize.STRING,
          allowNull: false
        },
        text: {
          type: Sequelize.STRING,
          allowNull: false
        }
      })
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('posts');
  }
};
