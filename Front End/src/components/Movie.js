import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ id_movie, title, year, poster }) => {
  return (
    <Link to={`/video/${id_movie}`} className='pelicula'>
      <div className='img-container'>
        <img src={poster} alt={title} />
      </div>
      <div className='pelicula-footer'>
        <p>
          {title} ({year})
        </p>
      </div>
    </Link>
  )
}

export default Movie
