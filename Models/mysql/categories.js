const Sequelize = require('sequelize');
const sequelize = require('../../utils/dbmysql');
const categories = sequelize.define("categories",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
}, {
    tableName: "categories",
    timestamps: false, // if you don't have timestamp fields
});

module.exports = categories;
