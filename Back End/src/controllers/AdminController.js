const { getAdmin } = require ("../models/Administrator");

module.exports.getAdminController = async (req, res) => {
    const {email, password} = req.body
    try {
        const adminData = await getAdmin(email, password)
        console.log(email)
        return res.send(adminData);
    } catch (err) {
        return res.send(err)
    }
}