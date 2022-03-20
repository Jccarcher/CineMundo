const {createSerie, getAllSeries, getSerie, updateSerieData, DeleteSerie} = require ("../models/Serie");


module.exports.createSerieController = async (req, res) =>{
    const {title, year, synopsis, language, season, releaseDate, poster} = req.body
    try {
        const serieData = await createSerie(title, year, synopsis, language, season, releaseDate, poster)
        return res.send(serieData)
    } catch (err) {
        return res.send("The Serie has been create")
    } 
}

module.exports.getAllSeriesController = async (res) =>{
    try {
        const serieData = await getAllSeries() 
        return res.send(serieData)
    } catch (err) {
        return res.send("The Serie has been create")
    } 
}

module.exports.getSerieController = async(req, res) => {
    const {id_series, title}  = req.body
    try {
        const serieData = await getSerie(id_series, title)
        return res.send(serieData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.updateSerieDataController = async(req, res) => {
    const {id_series, title, synopsis, language, season, releaseDate, poster}  = req.body
    try {
        const userData = await updateSerieData(id_series, title, synopsis, language, season, releaseDate, poster)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.DeleteSerieController = async(req, res) => {
    const {id_series}  = req.params
    try {
        const userData = await DeleteSerie(id_series)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}