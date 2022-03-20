const express = require('express')
const router = express.Router();
const {createUserController, getUserController, updateUserDataController, updateUsertypeSuscriptionController, updateUserPassController} = 
require('../controllers/UserController')

console.log("pase por User routas")
router.get("/user", getUserController)
router.post("/user/create", createUserController)
router.put("/user/Update/data",updateUserDataController )
router.put("/user/Update/Suscription",updateUsertypeSuscriptionController)
router.put("/user/Update/Password",updateUserPassController)

module.exports = router;