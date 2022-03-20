const {createDocumental, getAllDocumental, getDocumental, updateDocumentalData, DeleteDocumental} = require ("../models/Documental");

module.exports.createDocumentalController = async (req, res) =>{
    const {title, year, synopsis, language, season, releaseDate, poster} = req.body
    try {
        const documentalData = await createDocumental(title, year, synopsis, language, season, releaseDate, poster)
        return res.send(documentalData)
    } catch (err) {
        return res.send("The Documental has been create")
    } 
}

module.exports.getAllDocumentalController = async (res) =>{
    try {
        const documentalData = await getAllDocumental() 
        return res.send(documentalData)
    } catch (err) {
        return res.send("The Documental has been create")
    } 
}

module.exports.getDocumentalController = async(req, res) => {
    const {id_documental, title}  = req.body
    try {
        const documentalData = await getDocumental(id_documental, title)
        return res.send(documentalData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.updateDocumentalDataController = async(req, res) => {
    const {id_documental, title, synopsis, language, season, releaseDate, poster}  = req.body
    try {
        const documentalData = await updateDocumentalData(id_documental, title, synopsis, language, season, releaseDate, poster)
        return res.send(documentalData)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.DeleteDocumentalController = async(req, res) => {
    const {id_documental}  = req.params
    try {
        const documentalData = await DeleteDocumental(id_documental)
        return res.send(documentalData)
    } catch (error) {
        return res.send(error)
    }
}