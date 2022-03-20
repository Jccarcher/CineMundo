const express = require('express')
const router = express.Router()
const {getAllDocumentalController, getDocumentalController, createDocumentalController, updateDocumentalDataController, DeleteDocumentalController} = 
require('../controllers/DocumentalRouter')

console.log("pase por documentals routas")
router.get("/documentals", getAllDocumentalController)
router.get("/documental", getDocumentalController)
router.post("/documental/create", createDocumentalController)
router.put("/documental/Update/data",updateDocumentalDataController)
router.delete("/documental/delete", DeleteDocumentalController)

module.exports = router;