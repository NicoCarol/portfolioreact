import React from "react";
import "../css/Header.css"; // Reutilizamos estilos del header

const Footer = () => {
  return (
    <footer className="custom-navbar text-center mt-auto py-4">
      <p className="text-white mb-3">© 2025 Nicolás Carol | Seguime en:</p>
      <div>
        <a
          href="https://github.com/NicoCarol"
          className="btn btn-custom mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-carol-3096201bb/"
          className="btn btn-custom mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
