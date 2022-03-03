const mysql = require('mysql2');
//const dbConfig = require('../database/ConfigDatabase');


 module.exports.dbConnection = async (query) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      port: '3306',
      database: 'cinemundo'
    });
    const execution = await connection.query(query);
      connection.end()
    return execution
}