import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/posts">Posts</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
