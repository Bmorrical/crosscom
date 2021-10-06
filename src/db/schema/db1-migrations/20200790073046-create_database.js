'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            role: {
                allowNull: true,
                type: Sequelize.STRING
            },
            email: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING
            },
            isEmailVerified: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            password: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            }
        });
        await queryInterface.addIndex('Users', ['role']);
        await queryInterface.addIndex('Users', ['email']);
        await queryInterface.addIndex('Users', ['isEmailVerified']);
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('Users');
    }
};
