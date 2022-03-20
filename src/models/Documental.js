const {dbConnection, dbConnection2 } = require('../controllers/DatabaseController')

module.exports.createDocumental = async(title, year, synopsis, language, season, releaseDate, poster) => {
    let query = `INSERT INTO documental (title, year, synopsis, language, season, releaseDate, poster ) 
    values("${title}","${year}","${synopsis}",${language},"${season}",${releaseDate},${poster} );`
       const documentalData = await dbConnection(`${query}`)
       console.log(documentalData);
    return {
        documentalData
    }
}

module.exports.getAllDocumental = async () => {
    const query = `SELECT * FROM documental;`
    console.log(query);
        const documentalData = await dbConnection(query)
        console.log("LA DATAAAA" + documentalData[0]); 
    return {
        documental:documentalData[0]
    }
}

module.exports.getDocumental = async (id_documental, title) => {
    const query = `SELECT * FROM documental WHERE id_series = "${id_documental}, AND title = "${title}";`
    console.log(query);
        const documentalData = await dbConnection(query, [id_documental])
        console.log("LA DATAAAA" + documentalData[0]); 
    return {
        documental:documentalData[0]
    }
}

module.exports.updateDocumentalData = async(title, id_documental, year, synopsis, language, season, releaseDate, poster) => {
    const query = `UPDATE documental SET title = ?, year = ?, synopsis = ?, language = ?, season = ?, releaseDate = ? poster = ? WHERE id_documental = ?;`
    const documentalData = await dbConnection2(query,[title, year, synopsis, language, season, releaseDate, poster, id_documental])
    return {
        documentalData
    }
}

module.exports.DeleteDocumental = async(id_documental) => {
    const query = `DELETE from documental WHERE id_documental = ?;`
    const documentalData = await dbConnection2(query,[id_documental])
    return {
        documentalData
    }
}