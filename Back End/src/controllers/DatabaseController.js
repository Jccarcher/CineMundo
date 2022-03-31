const mysql = require('mysql')
const config = require('../database/config.js')

module.exports.dbConnection = (query) => new Promise((req,res) => {
    const connection = mysql.createConnection({
       /*  host: process.env.LOCAL ? 'localhost': config.HOST,
        user: process.env.LOCAL ? 'root': config.USER,
        password: process.env.LOCAL ? '': config.PASSWORD,
        database: process.env.LOCAL ? 'personal': config.DB */
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cinemundo1'
    })
    
    connection.query(query, (error, data, fields) => {
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