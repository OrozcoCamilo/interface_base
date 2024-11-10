import './AboutPage.css'; // Importar los estilos para la página
import { FaRocket, FaLeaf } from 'react-icons/fa'; // Íconos de react-icons
import empleado1 from '../assets/images/empleado1.jpg'; // Imagen del primer empleado
import empleado2 from '../assets/images/empleado2.jpg'; // Imagen del segundo empleado
import empleado3 from '../assets/images/empleado3.jpg'; // Imagen del tercer empleado

const AboutPage = ({ toggleTheme }) => {
  return (
    <div className="about-page">
      {/* Fondo animado */}
      <div className="background-animation"></div>

      {/* Contenido de la página */}
      <section className="about-header">
        <h1 className="page-title">¡Bienvenido a mi historia!</h1>
        <p className="subtitle">Explora quién soy, mi misión y visión, y el equipo detrás de este proyecto.</p>
      </section>

      {/* Misión y visión */}
      <section className="mission-vision">
        <div className="mission-item">
          <FaRocket className="icon" />
          <h3>Misión</h3>
          <p>
            Desarrollar mi capacidad intelectual para alcanzar mis objetivos, brindando mi ayuda a la sociedad y ganando experiencia en desarrollo web.
          </p>
        </div>
        <div className="vision-item">
          <FaLeaf className="icon" />
          <h3>Visión</h3>
          <p>
            Ser una persona innovadora, ágil y eficaz, compartiendo mis conocimientos para que otras personas se animen a estudiar.
          </p>
        </div>
      </section>

      {/* Sección del equipo */}
      <section className="team-section">
        <h2 className="team-title">Conoce a mi equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={empleado1} alt="Miembro del equipo 1" />
            <h4>Camilo</h4>
            <p>CEO y Fundador</p>
          </div>
          <div className="team-member">
            <img src={empleado2} alt="Miembro del equipo 2" />
            <h4>Camilo Orozco</h4>
            <p>Directora de Marketing</p>
          </div>
          <div className="team-member">
            <img src={empleado3} alt="Miembro del equipo 3" />
            <h4>Camilo Isaza</h4>
            <p>Desarrollador Web</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;




