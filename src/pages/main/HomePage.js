// src/pages/HomePage.js
import React from 'react';
import Counter from '../components/Counter';
import PostList from '../components/PostList';

function HomePage() {
  return (
    <div>
      <h1>Bienvenido a la Página de Inicio</h1>
      <Counter />
      <PostList />
    </div>
  );
}

export default HomePage;
