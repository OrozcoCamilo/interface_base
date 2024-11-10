// src/pages/ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css'; // Asegúrate de importar el archivo CSS

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Nombre:', name, 'Correo:', email, 'Mensaje:', message);
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h2 className="form-title">Contactame</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Correo Electrónico</label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="message">Mensaje</label>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

