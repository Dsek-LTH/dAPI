'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'userRoles',
            {
                createdAt: {
                    type: Sequelize.DATE
                },
                updatedAt: {
                    type: Sequelize.DATE
                },
                userId: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                    allowNull: false,
                    primaryKey: true
                },
                roleId: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'roles',
                        key: 'id'
                    },
                    allowNull: false,
                    primaryKey: true
                }
            });
    },
    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('userRoles');
    }
};
