'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Revennuestatics extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Revennuestatics.init({
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        totalRevenue: DataTypes.DECIMAL,
        bookingSold: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Revennuestatics',
    });
    return Revennuestatics;
};

