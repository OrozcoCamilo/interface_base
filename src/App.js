import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PostPage from './pages/PostPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Header />
        {/* Botón para cambiar el tema globalmente */}
        <button onClick={toggleTheme} style={{ position: 'absolute', top: '20px', right: '200px' }}>
          Cambiar Tema
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage toggleTheme={toggleTheme} />} /> {/* Pasamos la función a AboutPage */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts" element={PostPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


