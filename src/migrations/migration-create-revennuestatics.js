'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('revennuestatics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            startDate: {
                type: Sequelize.DATE
            },
            endDate: {
                type: Sequelize.DATE
            },
            totalRevenue: {
                type: Sequelize.DECIMAL
            },
            bookingSold: {
                type: Sequelize.STRING   
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('revennuestatics');
    }
};
