'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Movie.init({
        trailer: DataTypes.STRING,
        image: DataTypes.STRING,
        movieName: DataTypes.STRING,
        movieGenre: DataTypes.STRING,
        mainActor: DataTypes.STRING,
        director: DataTypes.STRING,
        duration: DataTypes.DATE,
        releaseDate: DataTypes.DATE,
        description: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Movie',
    });
    return Movie;
};

