import React from 'react'
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from 'react-icons/ai'
import { FaCheck, FaInfoCircle, FaFileUpload } from 'react-icons/fa'

import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

const Footer = () => {
  const navigate = useNavigate()
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
              <NavLink
                className='decoration'
                target='_blank'
                to='https://www.facebook.com'
                end
              >
                {' '}
                Facebook
              </NavLink>
            </p>
            <p>
              <AiFillInstagram />{' '}
              <NavLink
                className='decoration'
                target='_blank'
                to='https://www.instagram.com'
                end
              >
                {' '}
                Instagram
              </NavLink>
            </p>
            <p>
              <AiFillTwitterCircle />{' '}
              <NavLink
                className='decoration'
                target='_blank'
                to='https://www.twitter.com'
                end
              >
                {' '}
                Twitter
              </NavLink>
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
                <button
                  type='submit'
                  name='submit'
                  className='btn-suscribe decoration'
                >
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
              <NavLink to='/about' className='decoration'>
                Acerca de nosotros
                <br></br>
                <FaInfoCircle />
              </NavLink>
            </p>
            <p>
              <NavLink to='/nuevadata' className='decoration'>
                Cargar video
                <br></br>
                <FaFileUpload />
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
