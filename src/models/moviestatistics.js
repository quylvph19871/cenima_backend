'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Moviestatistics extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Moviestatistics.init({
        movieId: DataTypes.INTEGER,
        bookingSold: DataTypes.STRING,
        revenue: DataTypes.DECIMAL,
        createAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Moviestatistics',
    });
    return Moviestatistics;
};

