'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Screenroom extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Screenroom.init({
        cinemaId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        seatCapacity: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Screenroom',
    });
    return Screenroom;
};

