const mysql = require('mysql2');
//const dbConfig = require('../database/ConfigDatabase');


 module.exports.dbConnection = (query) => new Promise((req,res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      port: '3306',
      database: 'cinemundo'
    });

      connection.query(query, (error, data) => {
        if(error) {
            res(error)
        }

        connection.end((err)=> {
            if(err) {
                res(err)
            }
            res(data)
            console.log("PUTA DATA" + data.toString())
        })
    })
})