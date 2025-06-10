import React from "react";
import "../css/projects.css";

const Projects = () => {
  const proyectos = [
    {
      titulo: "App del Clima",
      descripcion:
        "Aplicación en React que muestra el clima de cualquier ciudad usando una API pública.",
      link: "https://github.com/NicoCarol/app-clima",
      imagen: "/img/clima.png",
    },
    {
      titulo: "Adivina el Pokémon",
      descripcion:
        "Juego interactivo en React donde el usuario debe adivinar el Pokémon oculto usando pistas.",
      link: "https://github.com/NicoCarol/adivina-el-pokemon",
      imagen: "/img/pokemon.png",
    },
  ];

  return (
    <div className="projects-container">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proyecto, index) => (
          <div className="project-card" key={index}>
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="project-image"
            />
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a
              href={proyecto.link}
              className="btn btn-outline-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;