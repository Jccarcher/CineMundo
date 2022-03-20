const express = require('express')
const router = express.Router()
const {getAllMovieController, getMovieController, createMovieController, updateMovieDataController, DeleteMovieController} = 
require('../controllers/MovieController')

console.log("pase por Movie routas")
router.get("/movies", getAllMovieController)
router.get("/movie", getMovieController)
router.post("/movies/create", createMovieController)
router.put("/movies/Update/data",updateMovieDataController)
router.delete("/movies/delete", DeleteMovieController)

module.exports = router;