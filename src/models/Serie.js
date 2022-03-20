const {dbConnection, dbConnection2 } = require('../controllers/DatabaseController')

module.exports.createSerie = async(title, year, synopsis, language, season, releaseDate, poster) => {
    let query = `INSERT INTO series (title, year, synopsis, language, season, releaseDate, poster ) 
    values("${title}","${year}","${synopsis}",${language},"${season}",${releaseDate},${poster} );`
       const serieData = await dbConnection(`${query}`)
       console.log(serieData);
    return {
        serieData
    }
}

module.exports.getAllSeries = async () => {
    const query = `SELECT * FROM series;`
    console.log(query);
        const serieData = await dbConnection(query)
        console.log("LA DATAAAA" + serieData[0]); 
    return {
        serie:serieData[0]
    }
}

module.exports.getSerie = async (id_series, title) => {
    const query = `SELECT * FROM series WHERE id_series = "${id_series}, AND title = "${title}";`
    console.log(query);
        const serieData = await dbConnection(query, [id_series])
        console.log("LA DATAAAA" + serieData[0]); 
    return {
        serie:serieData[0]
    }
}

module.exports.updateSerieData = async(title, id_series, year, synopsis, language, season, releaseDate, poster) => {
    const query = `UPDATE series SET title = ?, year = ?, synopsis = ?, language = ?, season = ?, releaseDate = ? poster = ? WHERE id_series = ?;`
    const serieData = await dbConnection2(query,[title, year, synopsis, language, season, releaseDate, poster, id_series])
    return {
        serieData
    }
}

module.exports.DeleteSerie = async(id_series) => {
    const query = `DELETE from series WHERE id_series = ?;`
    const serieData = await dbConnection2(query,[id_series])
    return {
        serieData
    }
}