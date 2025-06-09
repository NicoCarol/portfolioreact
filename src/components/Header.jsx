import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='mx-4' to="/">Home</Link>
            <Link className='mx-4' to="/about">About Me</Link>
            <Link className='mx-4' to="/projects">Projects</Link>
            <Link className='mx-4' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header