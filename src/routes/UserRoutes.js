const express = require('express')
const {createUserController, 
    getUserController, 
    updateUserDataController, 
    updateUsertypeSuscriptionController, 
    updateUserPassController} = require("../controllers/UserController")


const router = express.Router()

router.get("/user", getUserController)
router.post("/user/create", createUserController)
console.log("pase por routas")
router.put("/user/Update/data",updateUserDataController )
router.put("/user/Update/Suscription",updateUsertypeSuscriptionController)
router.put("/user/Update/Password",updateUserPassController)

module.exports = router;