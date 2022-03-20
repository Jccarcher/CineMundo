const {dbConnection, dbConnection2 } = require('../controllers/DatabaseController')
const moment = require('moment');

module.exports.createUser = async(name, lastname, documentNumber, email, age, password, typeSuscription) => {
    let createTime = moment().format();
    let updateTime = moment().format();
    let query = `INSERT INTO usuarios (name, lastname, documentNumber, email, age, password, typeSuscription, createTime, updatetime ) 
    values("${name}","${lastname}",${documentNumber},"${email}",${age},"${password}","${typeSuscription}","${createTime}","${updateTime}");`
       const userData = await dbConnection(`${query}`)
       console.log(userData);
    return {
        userData
    }
}

module.exports.getUser = async (email, res) => {
    const query = `SELECT * FROM usuarios WHERE email = "${email}";`
    console.log(query);
        const userData = await dbConnection(query, [email])
        console.log("LA DATAAAA" + userData[0]); 
    return {
        user:userData[0]
    }
}

module.exports.updateUserData = async(id_usr, name, lastname, documentNumber, email, age) => {
    const query = `UPDATE usuarios SET name = ?, lastname = ?, documentNumber = ?, age = ? WHERE id_usr = ? AND email = ?;`
    const userData = await dbConnection2(query,[name, lastname, documentNumber, age, id_usr, email])
    return {
        userData
    }
}

module.exports.updateUsertypeSuscription = async (id_usr, email, typeSuscription, password) => {
    let updateTime = moment().format();
    const query = `UPDATE usuarios SET typeSuscription = ?, updatetime = ? WHERE id_usr = ? AND email = ? AND password = ?;`
    const userData = await dbConnection2(query, [typeSuscription, updateTime, id_usr, email, password])
    return {
        userData
    }
}

module.exports.updateUserPass = async(id_usr, email, password) =>{
        const query = `UPDATE usuarios SET password = ? WHERE id_usr = ? AND email = ?;`
        const userData = await dbConnection2(query, [password, id_usr, email])
    return {
        userData
    }
}
