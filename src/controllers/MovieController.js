const {createMovie, getAllMovies, getMovie, updateMovieData, DeleteMovie} = require ("../models/Movie");


module.exports.createMovieController = async (req, res) =>{
    const {title, year, synopsis, language, season, releaseDate, poster} = req.body
    try {
        const serieData = await createMovie(title, year, synopsis, language, season, releaseDate, poster)
        return res.send(serieData)
    } catch (err) {
        return res.send("The Movie has been create")
    } 
}

module.exports.getAllMovieController = async (res) =>{
    try {
        const serieData = await getAllMovies() 
        return res.send(serieData)
    } catch (err) {
        return res.send("The Movie has been create")
    } 
}

module.exports.getMovieController = async(req, res) => {
    const {id_series, title}  = req.body
    try {
        const serieData = await getMovie(id_series, title)
        return res.send(serieData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.updateMovieDataController = async(req, res) => {
    const {id_series, title, synopsis, language, season, releaseDate, poster}  = req.body
    try {
        const userData = await updateMovieData(id_series, title, synopsis, language, season, releaseDate, poster)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.DeleteMovieController = async(req, res) => {
    const {id_series}  = req.params
    try {
        const userData = await DeleteMovie(id_series)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}