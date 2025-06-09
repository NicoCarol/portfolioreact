import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/header.css"
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto">
            <Link className="nav-link-custom" to="/">Home</Link>
            <Link className="nav-link-custom" to="/about">About Me</Link>
            <Link className="nav-link-custom" to="/projects">Projects</Link>
            <Link className="nav-link-custom" to="/contact">Contact</Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
