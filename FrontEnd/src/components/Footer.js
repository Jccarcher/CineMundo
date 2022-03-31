import React from 'react'
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillCaretUp,
} from 'react-icons/ai'
import { FaCheck, FaInfoCircle } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-sm-4'>
            <img src={logo} className='img-footer' alt='logo' />
            <p>
              Cinemundo es una web diseñada con React, Node, MySQl y Express.
              Fullstack developers®.
            </p>
            <p>
              <AiFillFacebook />{' '}
              <Link className='decoration' to='https://www.facebook.com'>
                {' '}
                Facebook
              </Link>
            </p>
            <p>
              <AiFillInstagram />{' '}
              <Link className='decoration' to='www.instagram.com'>
                {' '}
                Instagram
              </Link>
            </p>
            <p>
              <AiFillTwitterCircle />{' '}
              <Link className='decoration' to='www.twitter.com'>
                {' '}
                Twitter
              </Link>
            </p>
          </div>

          <div className='col-md-4 col-sm-4 newsletter'>
            <h3>Suscribite a nuestras noticias!</h3>
            <p>
              Última informacion sobre peliculas, series y documentales.
              Novedades de la farándula y el mundo del espectáculo.
            </p>
            <div className='input-group'>
              <form method='post' action='https://submit-form.com/7C5gPaLN'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  required
                />
                <button type='submit' name='submit' className='btn-suscribe'>
                  <FaCheck />
                </button>
              </form>
            </div>
          </div>
          <div
            className='col-md-3 col-sm-4'
            style={{
              textAlign: 'center',
              margin: 'auto',
              paddingTop: '1em',
            }}
          >
            <p>
              <Link to='/about' className='decoration'>
                Acerca de nosotros
                <br></br>
                <FaInfoCircle />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
