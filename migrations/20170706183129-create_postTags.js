'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'postTags',
      {
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        postID:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'posts',
            key: 'id'
          }
        },
        tagID:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'tags',
            key: 'id'
          }
        }
      })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('postTags');
  }
};
