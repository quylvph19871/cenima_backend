'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cinema extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Cinema.init({
        nameCinema: DataTypes.STRING,
        location: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Cinema',
    });
    return Cinema;
};

