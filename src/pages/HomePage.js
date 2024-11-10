import React from 'react';
import Card from '../components/Card';
import './HomePage.css';
import Counter from '../components/Counter';  // Importando el Counter


// Importa las imágenes
import imagen1 from '../assets/images/imagen1.jpg';
import imagen2 from '../assets/images/imagen2.jpg';
import imagen3 from '../assets/images/imagen3.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="title">Bienvenido a mi página</h1>

      {/* Coloca el Counter debajo del título */}
      <Counter /> {/* Esto se encargará de renderizar el contador en la página */}

      <div className="card-container">
        <Card
          title="Tarjeta Explosiva"
          description="Explosión de colores."
          imgSrc={imagen1}
        />
        <Card
          title="Tarjeta Liquicolores"
          description="Colores liquicolores."
          imgSrc={imagen2}
        />
        <Card
          title="Tarjeta Espacial"
          description="Vista espacial aérea."
          imgSrc={imagen3}
        />
      </div>
    </div>
  );
};

export default HomePage;



