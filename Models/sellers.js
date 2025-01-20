
const Sequelize = require('sequelize');

const sequelize = require('../utils/db');
const Seller = sequelize.define('Seller', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        require:true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
        require:true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull:false,
        require:false
    },
    address: {
        type: Sequelize.STRING,
        require:false
    }
});
module.exports = Seller;