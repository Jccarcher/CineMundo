const {dbConnection} = require('../controllers/DatabaseController')

module.exports.createSerie = async(title, trailer, synopsis, poster, year) => {
    let query = `INSERT INTO series (title, trailer, synopsis, poster, year ) 
    values("${title}","${trailer}","${synopsis}","${poster}",${year} );`
       const serieData = await dbConnection(`${query}`)
       console.log(serieData);
    return {
        serieData
    }
}

module.exports.getAllSeries = async () => {
        const serieData = await dbConnection("SELECT * FROM series;")
        console.log(serieData); 
    return {
        serie:serieData
    }
}

module.exports.getSerie = async (id_serie, title) => {
    const query = `SELECT * FROM series WHERE id_serie = ${id_serie}, AND title = "${title}";`
    console.log(query);
        const serieData = await dbConnection(query, [id_serie])
        console.log(serieData[0]); 
    return {
        serie:serieData[0]
    }
}

module.exports.updateSerieData = async(id_serie,title, trailer, synopsis, poster, year) => {
    const query = `UPDATE series SET title = ?, year = ?, synopsis = ?, poster = ? WHERE id_serie = ?;`
    const serieData = await dbConnection2(query,[title, trailer, synopsis, poster, year, id_serie])
    return {
        serieData
    }
}

module.exports.DeleteSerie = async(id_serie) => {
    const query = `DELETE from series WHERE id_serie = ?;`
    const serieData = await dbConnection2(query,[id_serie])
    return {
        serieData
    }
}