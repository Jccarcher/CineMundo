import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logomenu.png'
import { FaListUl } from 'react-icons/fa'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from 'mdb-react-ui-kit'

const Navbar = () => {
  return (
    <>
      <MDBNavbar sticky light className='menu'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <Link to='/inicio'>
              <img src={logo} className='logo' alt='cinemundo logo' />
            </Link>
          </MDBNavbarBrand>
          <ul className='menu-list'>
            <li>
              <Link to='/login' className='menu-links'>
                Login
                <FaUserCheck />
              </Link>
            </li>
            <li>
              <Link to='/signup' className='menu-links'>
                SignUp
                <FaUserPlus />
              </Link>
            </li>
          </ul>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
