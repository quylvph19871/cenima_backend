'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Seatvariants extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Seatvariants.init({
        seatId: DataTypes.INTEGER,
        variantName: DataTypes.STRING,
        variantPrice: DataTypes.DECIMAL,
    }, {
        sequelize,
        modelName: 'Seatvariants',
    });
    return Seatvariants;
};

