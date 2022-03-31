const {dbConnection} = require('../controllers/DatabaseController')


module.exports.createUser = async(name, lastname, documentNumber, email, age, password, typeSuscription) => {
    console.log("aca")
    const userData = await dbConnection (`INSERT INTO users (name, lastname, documentNumber, email, age, password, typeSuscription, createTime ) 
    VALUES("${name}","${lastname}",${documentNumber},"${email}",${age},"${password}","${typeSuscription}","${CURDATE()}");`)
       
       console.log(userData);
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
