import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavComponent = () => {
  return (
    <Navbar bg='light' sticky='top'>
      <Navbar.Brand href='/'>trivia!</Navbar.Brand>
      <Nav>
        <Nav.Link href='/' className='nav-link'>
          home
        </Nav.Link>
        <Nav.Link href='/about' className='nav-link'>
          about
        </Nav.Link>
        <Nav.Link
          href='https://trivia-train.herokuapp.com/'
          className='nav-link'>
          deployed site
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavComponent
