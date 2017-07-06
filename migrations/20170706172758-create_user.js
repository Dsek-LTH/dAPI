'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
  'users',
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
    firstName:{
      type : Sequelize.STRING,
      allowNull: false,
  },
    lastName:{
      type: Sequelize.STRING,
      allowNull: false
    },
    password:{
      type: Sequelize.STRING,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false
    },
    luCard:{
      type: Sequelize.STRING
    },
    borderAmount:{
      type: Sequelize.INTEGER
    }
  })
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
  }
};
