'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('movies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            trailer: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            movieName: {
                type: Sequelize.STRING
            },
            movieGenre: {
                type: Sequelize.STRING
            },
            mainActor: {
                type: Sequelize.STRING
            },
            director: {
                type: Sequelize.STRING
            },
            duration: {
                type: Sequelize.DATE
            },
            releasedate: {
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('movies');
    }
};
