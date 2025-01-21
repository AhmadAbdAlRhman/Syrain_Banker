const Sequelize = require("sequelize");
const sequelize = require('../../utils/dbmysql');
const product = require("./Products");
const customer = require("./Users");
const Order = sequelize.define(
"order",
{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: customer, // name of the table being referenced
            key: "id",
        },
    },  
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
    },
    productId: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
        references: 
        {
            model: product, // name of the table being referenced
            key: "id",
        },
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
    Paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
},
{
    tableName: "orders",
    timestamps: true, // if you don't have timestamp fields
}
);

module.exports = Order;