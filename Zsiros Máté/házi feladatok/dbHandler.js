const {Sequelize, DataTypes} = require('sequelize')
let dbHandler
try{
    dbHandler = new Sequelize(
    "data",
    "root",
    "",
    {
        dialect: "mysql",
        host: "127.0.0.1"
    }
)}catch(error){
    console.log(error)
}

exports.gyumolcs = dbHandler.define(
    "gyumolcs",{
        "id":{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        "nev":{
            type: DataTypes.STRING,
            allowNull: false,
        },
        "uid":{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        "ar":{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        "suly":{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
)

exports.gyujto = dbHandler.define(
    "gyujto",{
        "id":{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        "nev":{
            type: DataTypes.STRING,
            allowNull: false,
        },
        "jelszo":{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)