'use strict';


const mysql = require('mysql');

//console.log("pwd: ", process.env.MYSQL_PASSWORD)

let db  = mysql.createConnection(process.env.JAWSDB_URL ||
{
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'inventoryManager'
});

db.connect();

//db.query('create database if not exists testdb')

module.exports = db;