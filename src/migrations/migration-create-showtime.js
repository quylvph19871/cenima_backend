'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('showtime', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            movieID: {
                type: Sequelize.INTEGER
            },
            screenRoomId: {
                type: Sequelize.STRING
            },
            startTime: {
                type: Sequelize.DATE
            },
            endTime: {
                type: Sequelize.DATE   
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
        await queryInterface.dropTable('showtime');
    }
};
