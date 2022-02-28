const {createUser, getUser, updateUserData, updateUsertypeSuscription, updateUserPass} = require ("../models/User");

module.exports.createUserController = async (req, res) =>{
    const {name, lastname, documentNumber, email, age, password, typeSuscription} = req.body
    try {
        const userData = await createUser(name, lastname, documentNumber, email, age, password, typeSuscription)
        console.log(`llegue a createUserController`);
        return res.status(200).send(userData)
    } catch (err) {
        return res.status(500).send(`Error ==> (UserController.js) File, in Function (createUserController)`)
    }
    
}

module.exports.getUserController = async (req, res) => {
    const {email} = req.body
    try {
        const userData = await getUser(email)
        console.log(email)
        return res.status(200).send(userData).body;
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports.updateUserDataController = async(req, res) => {
    const {name, lastname, email, age, documentNumber}  = req.body
    try {
        const userData = await updateUserData(name, lastname, email, age, documentNumber)
        return res.status(200).send(userData)
    } catch (error) {
        return res.status(500).send(`Error ==> (UserController.js) File, in Function (updateUserDataController) ==> ${error}`)
    }
}

module.exports.updateUsertypeSuscriptionController = async(req, res) => {
    const {email, typeSuscription, password}  = req.body
    try {
        const userData = await updateUsertypeSuscription(email, typeSuscription, password)
        return res.status(200).send(userData)
    } catch (error) {
        return res.status(500).send(`Error ==> (UserController.js) File, in Function (updateUserDataController) ==> ${error}`)
    }
}

module.exports.updateUserPassController = async(req, res) => {
    const {email, password}  = req.body
    try {
        const userData = await updateUserPass(email, password)
        return res.status(200).send(userData)
    } catch (error) {
        return res.status(500).send(`Error ==> (UserController.js) File, in Function (updateUserDataController) ==> ${error}`)
    }
}