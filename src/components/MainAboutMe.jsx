import React from "react";
import "../css/mainaboutme.css";


const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-image">
       <img
          src="/Imagen de WhatsApp 2025-06-09 a las 21.29.10_44f60be6.jpg"
          alt="Nicolás Carol"
        />
      </div>
      <div className="aboutme-text">
        <h2>Sobre mí</h2>
        <p>
          Soy Nicolás Carol, un profesional comprometido con el progreso continuo, con experiencia en atención al cliente y soporte técnico. Actualmente, me encuentro desarrollando mis habilidades en programación y gestionando mi propio emprendimiento.
        </p>
        <p>
          Estudié Ingeniería Electrónica en la UTN FRT hasta tercer año y actualmente curso la Tecnicatura en Programación en la misma institución.
        </p>
        <p>
          Conocimientos: JavaScript, React, Python, Office, Inglés intermedio, bases de datos básicas.
        </p>
        <p>
          Experiencia: en soporte técnico  y dueño de la Librería Imperial.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
