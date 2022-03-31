const {dbConnection } = require('../controllers/DatabaseController')

module.exports.getAdmin = async (email,password,res) => {
    const query = `SELECT * FROM usuarios WHERE email = "${email}" and password "${password}";`
    console.log(query);
        const adminData = await dbConnection(query, [email, password])
        console.log("LA DATAAAA" + adminData[0]); 
    return {
        admin:adminData[0]
    }
}