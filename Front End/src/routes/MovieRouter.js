const express = require('express')
const MovieRouter = express.Router()

const {
  getAllMovieController,
  getMovieController,
  createMovieController,
  updateMovieDataController,
  DeleteMovieController,
} = require('../controllers/MovieController')

console.log('pase por Movie routas')
MovieRouter.get('/movies', getAllMovieController)
MovieRouter.get('/movie/:id', getMovieController)
MovieRouter.post('/movies/create', createMovieController)
MovieRouter.put('/movies/Update/data', updateMovieDataController)
MovieRouter.delete('/movies/delete', DeleteMovieController)

module.exports = MovieRouter
