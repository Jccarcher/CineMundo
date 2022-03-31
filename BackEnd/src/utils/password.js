const bcrypt = require('bcrypt')

module.exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10) 
}

module.exports.comparadorPassword = (passwordComparar, passwordGuardado) => {
    return bcrypt.compareSync(passwordComparar, passwordGuardado)
}