const express = require('express')
const SerieRouter = express.Router();

const {getAllSeriesController,
       getSerieController, 
       createSerieController, 
       updateSerieDataController,
       DeleteSerieController } = require("../controllers/SerieController")



console.log("pase por Serie routas")
SerieRouter.get("/series", getAllSeriesController)
SerieRouter.get("/serie", getSerieController)
SerieRouter.post("/series/create", createSerieController)
SerieRouter.put("/series/Update/data",updateSerieDataController)
SerieRouter.delete("/series/delete", DeleteSerieController)

module.exports = SerieRouter;