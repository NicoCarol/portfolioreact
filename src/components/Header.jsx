import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useThemeStore from "../store/themestore";

const Header = () => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <Navbar expand="lg" className="px-3" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="mx-3 nav-link" to="/">Home</Link>
            <Link className="mx-3 nav-link" to="/about">About Me</Link>
            <Link className="mx-3 nav-link" to="/projects">Projects</Link>
            <Link className="mx-3 nav-link" to="/contact">Contact</Link>
          </Nav>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={toggleTheme}
          >
            {darkMode ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;