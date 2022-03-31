const {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovieData,
  DeleteMovie,
} = require('../models/Movie')

module.exports.createMovieController = async (req, res) => {
  const { title, year, synopsis, language, season, releaseDate, poster } =
    req.body
  try {
    const serieData = await createMovie(
      title,
      year,
      synopsis,
      language,
      season,
      releaseDate,
      poster
    )
    return res.send(serieData)
  } catch (err) {
    return res.send(err)
  }
}

module.exports.getAllMovieController = async (req, res) => {
  try {
    const serieData = await getAllMovies()
    return res.send(serieData)
  } catch (err) {
    res.send(err)
  }
}

module.exports.getMovieController = async (req, res) => {
  try {
    const movieData = await getMovie(req.params.id)
    return res.send(movieData)
  } catch (err) {
    return res.send(err)
  }
}

module.exports.updateMovieDataController = async (req, res) => {
  const { id_series, title, synopsis, language, season, releaseDate, poster } =
    req.body
  try {
    const userData = await updateMovieData(
      id_series,
      title,
      synopsis,
      language,
      season,
      releaseDate,
      poster
    )
    return res.send(userData)
  } catch (err) {
    return res.send(err)
  }
}

module.exports.DeleteMovieController = async (req, res) => {
  const { id_series } = req.body
  try {
    const userData = await DeleteMovie(id_series)
    return res.send(userData)
  } catch (err) {
    return res.send(err)
  }
}
