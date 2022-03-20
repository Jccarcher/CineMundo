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

      connection.query(query, (error, data) => {
        if(error) {
            res(error)
        }

        connection.end((err)=> {
            if(err) {
                res(err)
            }
            res(data)
        })
    })
}

module.exports.dbConnection2 = (query, data) => new Promise((req,res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'cinemundo'
  });

    connection.query(query, data, (error) => {
      if(error) {
          res(error)
      }

      connection.end((err)=> {
          if(err) {
              res(err)
          }
          res(data)
      })
  })
})
