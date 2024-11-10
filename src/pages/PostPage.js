import React from 'react';
import PostList from '../components/PostList';
import './PostPage.css'; // Asegúrate de tener el archivo de CSS para la página

const PostPage = () => {
  return (
    <div className="post-page">
      <h1 className="page-title">Bienvenido a la Lista de Posts</h1>
      <p className="page-description">
        Explora los artículos más recientes y descubre contenido interesante sobre diversos temas.
      </p>
      <div className="featured-section">
        <h2>Artículos Destacados</h2>
        <p className="featured-description">
          Algunos de los artículos más populares y relevantes de nuestra página.
        </p>
        <div className="featured-posts">
          <div className="featured-post">
            <img src="https://via.placeholder.com/300" alt="Post 1" />
            <h3>Título del Post Destacado 1</h3>
            <p>Descripción breve del post destacado para que el usuario se interese.</p>
            <button className="read-more">Leer más</button>
          </div>
          <div className="featured-post">
            <img src="https://via.placeholder.com/300" alt="Post 2" />
            <h3>Título del Post Destacado 2</h3>
            <p>Otro post interesante que puede captar la atención de los visitantes.</p>
            <button className="read-more">Leer más</button>
          </div>
          <div className="featured-post">
            <img src="https://via.placeholder.com/300" alt="Post 3" />
            <h3>Título del Post Destacado 3</h3>
            <p>Un resumen que atrae al lector a hacer clic y leer más sobre este tema.</p>
            <button className="read-more">Leer más</button>
          </div>
        </div>
      </div>
      <PostList />
    </div>
  );
};

export default PostPage;

