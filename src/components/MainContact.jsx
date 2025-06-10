import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("Mensaje enviado con éxito. ¡Gracias por contactarme!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>¿Querés hablar sobre un proyecto o colaborar? Escribime abajo:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows="5"
          value={form.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn btn-outline-success">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;