const Sequelize = require("sequelize");
const sequelize = require('../../utils/dbmysql');
const product = require("./Products")
const ProductImage = sequelize.define(
    "ProductImage", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            references: {
                model: product, // name of the table being referenced
                key: "id",
            },
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: "ProductImage",
        timestamps: false, // if you don't have timestamp fields
    }
);

module.exports = ProductImage;