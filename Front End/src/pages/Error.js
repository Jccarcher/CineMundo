import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <div className='section-title'>
        <h1 style={{ color: 'white' }}>
          {' '}
          Lo sentimos, no encontramos lo que buscabas.
        </h1>
        <Link to='/inicio' className='btn-white decoration'>
          Home
        </Link>
      </div>
    </section>
  )
}

export default Error
