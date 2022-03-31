const {dbConnection} = require('../controllers/DatabaseController')
const { comparadorPassword,hashPassword} = require('../utils/password')



module.exports.createUser = async(name, lastname, documentNumber, email, age, password, typeSuscription) => {
    const passwordEncriptado = hashPassword(password) 
    const userData = await dbConnection (`INSERT INTO users (name, lastname, documentNumber, email, age, password, typeSuscription) 
    VALUES("${name}","${lastname}",${documentNumber},"${email}",${age},"${passwordEncriptado}","${typeSuscription}");`)
    return {
        message: `A NEW user with EMAIL: ${email} has been create`,
        userData
    }
}

module.exports.getUser = async (email) => {
    
    
        const userData = await dbConnection(`SELECT * FROM users WHERE email = "${email}";`)
        console.log("LA DATAAAA" + userData);
        return {
           user:userData[0]
        }
   
}

module.exports.userEmailPassword = async (email, password) => {
    
    const data = await dbConnection(`SELECT * FROM users WHERE email = "${email}";`)
    console.log("llegue a user")
    if(data.lenght !== 0  && comparadorPassword(password, data[0].password)) {
        let {name, lastname, documentNumber, email, age} = data[0]
        let user = {"nombre" : name, "apellido": lastname, "dni": documentNumber, "email": email, "age":age}
        
        return {
            user : user,
            message: true
        }
    } else {
        return {
           message: false
        }
    }
}

module.exports.updateUserData = async(name, lastname, email, age, documentNumber) => {
    try {
        const userData = await dbConnection(`
        UPDATE users SET name = "${name}", "${lastname}","${email}","${age}","${documentNumber}"
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
        UPDATE users SET typeSuscription = "${typeSuscription}","
        WHERE email = "${email}" AND password = "${password}";
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
        UPDATE users SET password = "${password}","
        WHERE email = "${email}";
        `)
    } catch (error) {
        console.log("Error ==> (User.js) File Function {updateUserPass} ==>,", error)
    }
    return {
        message: `The user: ${email} has been Update,`,
        userData
    }
}
