const {dbConnection} = require('../controllers/DatabaseController')
const moment = require('moment');

module.exports.createUser = async(name, lastname, documentNumber, email, age, password, typeSuscription) => {
    let createTime = moment().format();
    let query = `INSERT INTO usuarios (name, lastname, documentNumber, email, age, password, typeSuscription, createTime ) 
    values("${name}","${lastname}","${documentNumber}","${email}",${age},${password},"${typeSuscription}","${createTime}");`
       const userData = await dbConnection(`${query}`)
       console.log(userData);
    return {
        //message: `A NEW user with EMAIL: ${email} has been create`,
        userData
    }
}

module.exports.getUser = async (email, res) => {
    const query = `SELECT * FROM usuarios WHERE email = "${email}";`
    console.log(query);
    try {
        const userData = await dbConnection(`${query}`,res)
        console.log("LA DATAAAA" + userData);
        return res(JSON.stringify(userData))
    } catch (err) {
        console.log("Error ==> (User.js) File Function {getUser} ==>,", err.error)
    }
}

module.exports.updateUserData = async(name, lastname, email, age, documentNumber) => {
    try {
        const userData = await dbConnection(`
        UPDATE usuarios SET name = "${name}", "${lastname}","${email}","${age}","${documentNumber}"
        WHERE mail = "${email}";
        `)
    } catch (error) {
        console.log("Error ==> (User.js) File Function {updateUserData} ==>,", error)
    }
    return {
        message: `The user: ${email} has been Update,`,
        userData
    }
}

module.exports.updateUsertypeSuscription = async (email, typeSuscription, password) => {
    try {
        const userData = await dbConnection(`
        UPDATE usuarios SET typeSuscription = "${typeSuscription}","
        WHERE mail = "${email}" AND password = "${password}";
        `)
    } catch (error) {
        console.log("Error ==> (User.js) File Function {updateUserPass} ==>,", error)
    }
    return {
        message: `The user: ${email} has been Update,`,
        userData
    }
}

module.exports.updateUserPass = async(email, password) =>{
    try {
        const userData = await dbConnection(`
        UPDATE usuarios SET password = "${password}","
        WHERE mail = "${email}";
        `)
    } catch (error) {
        console.log("Error ==> (User.js) File Function {updateUserPass} ==>,", error)
    }
    return {
        message: `The user: ${email} has been Update,`,
        userData
    }
}
