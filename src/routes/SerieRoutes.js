const express = require('express')
const router = express.Router();
const {getAllSeriesController, getSerieController, createSerieController, updateSerieDataController, DeleteSerieController } = 
require('../controllers/SerieController')

console.log("pase por Serie routas")
router.get("/series", getAllSeriesController)
router.get("/serie", getSerieController)
router.post("/series/create", createSerieController)
router.put("/series/Update/data",updateSerieDataController)
router.delete("/series/delete", DeleteSerieController)

module.exports = router;