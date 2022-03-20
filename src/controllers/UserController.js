const {createUser, getUser, updateUserData, updateUsertypeSuscription, updateUserPass} = require ("../models/User");

module.exports.createUserController = async (req, res) =>{
    const {name, lastname, documentNumber, email, age, password, typeSuscription} = req.body
    try {
        const userData = await createUser(name, lastname, documentNumber, email, age, password, typeSuscription)
        console.log(`llegue a createUserController`);
        return res.send(userData)
    } catch (err) {
        return res.send("The user has been create")
    } 
}

module.exports.getUserController = async (req, res) => {
    const {email} = req.body
    try {
        const userData = await getUser(email)
        console.log(email)
        return res.send(userData);
    } catch (err) {
        return res.send(err)
    }
}

module.exports.updateUserDataController = async(req, res) => {
    const {id_usr, name, lastname, documentNumber, email, age}  = req.body
    try {
        const userData = await updateUserData(id_usr, name, lastname, documentNumber, email, age)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.updateUsertypeSuscriptionController = async(req, res) => {
    const {id_usr, email, typeSuscription, password}  = req.body
    try {
        const userData = await updateUsertypeSuscription(id_usr, email, typeSuscription, password)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.updateUserPassController = async(req, res) => {
    const {id_usr, email, password}  = req.body
    try {
        const userData = await updateUserPass(id_usr,email, password)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}