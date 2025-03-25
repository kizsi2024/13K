<<<<<<< HEAD
const {Sequelize, DataTypes} = require('sequelize')

const databseHandler = new Sequelize(
    "tanmenet",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

exports.table = databseHandler.define(
    "orak",{
        "id":{
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        "cim":{
            type: DataTypes.STRING,
            allowNull: false
        },
        "leiras":{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
=======
const {Sequelize, DataTypes} = require('sequelize')

const databseHandler = new Sequelize(
    "tanmenet",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

exports.table = databseHandler.define(
    "orak",{
        "id":{
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        "cim":{
            type: DataTypes.STRING,
            allowNull: false
        },
        "leiras":{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
>>>>>>> b18977d1111580b066a1f621c469387cced089e1
)