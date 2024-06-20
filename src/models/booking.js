'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Booking.init({
        statusId: DataTypes.INTEGER,
        customerId: DataTypes.INTEGER,
        enployeesId: DataTypes.INTEGER,
        seatId: DataTypes.INTEGER,
        screenRoomId: DataTypes.INTEGER,
        cinemaId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        price: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};

