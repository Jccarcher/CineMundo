const {dbConnection, dbConnection2 } = require('../controllers/DatabaseController')

module.exports.createMovie = async(title, year, synopsis, language, season, releaseDate, poster) => {
    let query = `INSERT INTO movies (title, year, synopsis, language, season, releaseDate, poster ) 
    values("${title}","${year}","${synopsis}",${language},"${season}",${releaseDate},${poster} );`
       const movieData = await dbConnection(`${query}`)
       console.log(movieData);
    return {
        movieData
    }
}

module.exports.getAllMovies = async () => {
    const query = `SELECT * FROM movies;`
    console.log(query);
        const movieData = await dbConnection(query)
        console.log("LA DATAAAA" + movieData[0]); 
    return {
        movie:movieData[0]
    }
}

module.exports.getMovie = async (id_movie, title) => {
    const query = `SELECT * FROM movies WHERE id_series = "${id_movie}, AND title = "${title}";`
    console.log(query);
        const movieData = await dbConnection(query, [id_movie])
        console.log("LA DATAAAA" + movieData[0]); 
    return {
        movie:movieData[0]
    }
}

module.exports.updateMovieData = async(title, id_series, year, synopsis, language, season, releaseDate, poster) => {
    const query = `UPDATE movie SET title = ?, year = ?, synopsis = ?, language = ?, season = ?, releaseDate = ? poster = ? WHERE id_series = ?;`
    const movieData = await dbConnection2(query,[title, year, synopsis, language, season, releaseDate, poster, id_series])
    return {
        movieData
    }
}

module.exports.DeleteMovie = async(id_movie) => {
    const query = `DELETE from movie WHERE id_movie = ?;`
    const movieData = await dbConnection2(query,[id_movie])
    return {
        movieData
    }
}