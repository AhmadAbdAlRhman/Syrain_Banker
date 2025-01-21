const Sequelize = require('sequelize');

const sequelize = require('../../utils/dbmysql');
const USERS = sequelize.define('USERS', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    second_name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        require: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    image:{
        type:Sequelize.STRING,
        allowNull: true,  
    },
    address: {
        type: Sequelize.STRING,
        require: false
    }
});
module.exports = USERS;