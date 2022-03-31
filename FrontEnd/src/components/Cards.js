import React from 'react'
import { Link } from 'react-router-dom'

import image2 from '../images/2.jpg'
import image6 from '../images/6.jpg'
import image8 from '../images/8.jpg'

const Cards = () => {
  return (
    <div>
      <div className='section-title'>
        <Link to='/login' className='btn-white decoration'>
          Ingresar
        </Link>
      </div>
      <section className='movies-center col-md row mx-auto '>
        <div className='card bg-dark decoration'>
          <img src={image2} className='card-img' alt='...' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Encontra tu pelicula favorita!</h5>
            <p className='card-text mt-5'>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Descubri detalles de tus peliculas preferidas, elenco, casting,
              descripciones y demas!
            </p>
            <p className='card-text'>Actualizaciones mensuales.</p>
          </div>
        </div>
        <div className='card bg-dark decoration'>
          <img src={image6} className='card-img' alt='...' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Descubri documentales alucinantes!</h5>
            <p className='card-text mt-5'>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Documentales y cortos audiovisuales de primer nivel. <br></br>
              Vida salvaje, cultura mundial, naturaleza, astronomía y demás.
            </p>
          </div>
        </div>
        <div className='card bg-dark decoration'>
          <img src={image8} className='card-img' alt='...' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Series y novelas!</h5>
            <p className='card-text mt-5'>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Los clásicos de siempre y los nuevos de ahora. <br></br> Esas
              series que amamos todos y las del dia a día. <br></br> Todas aquí
              con el detalle del elenco y próximas novedades.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cards
