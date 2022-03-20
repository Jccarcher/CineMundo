const express = require('express')
const {getAllSeriesController,
       getSerieController, 
       createSerieController, 
       updateSerieDataController,
       DeleteSerieController } = require("../controllers/SerieController")


const router = express.Router();
console.log("pase por Serie routas")
router.get("/series", getAllSeriesController)
router.get("/serie", getSerieController)
router.post("/series/create", createSerieController)
router.put("/series/Update/data",updateSerieDataController)
router.delete("/series/delete", DeleteSerieController)

module.exports = router;