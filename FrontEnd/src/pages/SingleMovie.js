import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
const url = 'http://localhost:5000/cinemundo/movie/'

const SingleMovie = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getMovie() {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      try {
        if (data) {
          setMovie(data[0])
        } else {
          setMovie(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getMovie()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!movie) {
    return <h2 className='section-title'>No encontramos la pelicula.</h2>
  }

  const spliteo = movie.trailer.split('/')
  const spliteo2 = spliteo[1].split('=')
  const idVideo = spliteo2[1]
  const linkYoutube = `https://www.youtube.com/embed/${idVideo}`

  return (
    <section className='section movie-section'>
      <h2 className='section-title'>{movie.title}</h2>
      <div className='movie'>
        <img src={movie.poster} style={{ color: 'white' }} alt={movie.title} />
        <div className='movie-info'>
          <p>
            <span className='movie-data'>Pelicula:</span>
            {movie.title}
          </p>
          <p>
            <span className='movie-data'>Descripción:</span>
            {movie.synopsis}
          </p>
          <p>
            <span className='movie-data'>Año:</span>
            {movie.year}
          </p>

          <p>
            <span className='movie-data'>Trailer:</span>
          </p>

          <br></br>
          <br></br>
          <iframe
            width='auto'
            height='315'
            src={linkYoutube}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
