import React, { useState, useEffect } from 'react'
import Movie from './Movie'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const { peliculas, loading } = useGlobalContext()

  useEffect(() => {
    fetch('http://localhost:5000/cinemundo/movies')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setMovies(data)
      })
  }, [])

  if (loading) {
    return <Loading />
  }
  if (peliculas.length < 1) {
    return <h2 className='section-title'> Lo sentimos, algo salió mal.</h2>
    console.log(peliculas)
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Archivos Cinemundo</h2>
      <div className='movies-center'>
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie}></Movie>
        })}
      </div>
    </section>
  )
}

export default MovieList
