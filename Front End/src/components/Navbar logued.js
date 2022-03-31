import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logomenu.png'
import { FaUserCircle } from 'react-icons/fa'
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from 'mdb-react-ui-kit'

const Navbar = () => {
  return (
    <>
      <MDBNavbar sticky light className='menu'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <Link to='/'>
              <img src={logo} className='logo' alt='cinemundo logo' />
            </Link>
          </MDBNavbarBrand>
          <ul className='menu-list'>
            <li>
              <Link to='/profile' className='menu-links'>
                Perfil
                <FaUserCircle />
              </Link>
            </li>
          </ul>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
