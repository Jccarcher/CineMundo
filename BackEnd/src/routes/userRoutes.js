const express = require('express')
const router = express.Router()

const {createUserController, 
    getUserController, 
    updateUserDataController,
     userEmailPasswordController,
    updateUsertypeSuscriptionController, 
    updateUserPassController} = require("../controllers/user.controller")



console.log("Pse por user roputes")
router.get("/", getUserController)
router.post("/login", userEmailPasswordController)
 router.post("/create", createUserController)
router.put("/Update/data",updateUserDataController )
router.put("/Update/Suscription",updateUsertypeSuscriptionController)
router.put("/Update/Password",updateUserPassController)

module.exports = router;