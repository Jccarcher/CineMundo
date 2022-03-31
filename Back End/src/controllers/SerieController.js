const {createSerie, getAllSeries, getSerie, updateSerieData, DeleteSerie} = require ("../models/Serie");


module.exports.createSerieController = async (req, res) =>{
    const {title, trailer, synopsis, poster, year} = req.body
    try {
        const serieData = await createSerie(title, trailer, synopsis, poster, year)
        return res.send(serieData)
    } catch (err) {
        return res.send(err)
    } 
}

module.exports.getAllSeriesController = async (req,res) =>{
    try {
        const serieData = await getAllSeries() 
        return res.send(serieData)
    } catch (err) {
        return res.send(err)
    } 
}

module.exports.getSerieController = async(req, res) => {
    const {id_serie, title}  = req.body
    try {
        const serieData = await getSerie(id_serie, title)
        return res.send(serieData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.updateSerieDataController = async(req, res) => {
    const {id_serie, title, trailer, synopsis, poster, year}  = req.body
    try {
        const userData = await updateSerieData(id_serie, title, trailer, synopsis, poster, year)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.DeleteSerieController = async(req, res) => {
    const {id_serie}  = req.body
    try {
        const userData = await DeleteSerie(id_serie)
        return res.send(userData)
    } catch (error) {
        return res.send(error)
    }
}