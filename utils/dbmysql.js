const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE,process.env.USERNAMEDB,process.env.PASSWORD,{
    host: process.env.HOST,
    port:process.env.PORT,
    dialect:'mysql',   
});

module.exports = sequelize;