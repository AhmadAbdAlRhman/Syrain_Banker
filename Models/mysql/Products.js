
const Sequelize = require('sequelize');
const Users = require('./Users');
const category = require('./categories');
const sequelize = require('../../utils/dbmysql');
const Products = sequelize.define('Products', {
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
    Discription: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    photo_data: {
        type: Sequelize.STRING,
        allowNull: false,
        require:true
    },
    size: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    kind: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    StoreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Users, // name of the table being referenced
            key: "id",
        },
    },
    CategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: category, // name of the table being referenced
            key: "id",
        },
    },
    discount:{
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}, {
    tableName: "Products",  
    timestamps: false, // if you don't have timestamp fields
});
module.exports = Products;