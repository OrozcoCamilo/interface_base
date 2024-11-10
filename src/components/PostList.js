import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData(); // Llama a la función fetchData
      setPosts(data); // Actualiza el estado con los datos obtenidos
    };

    getPosts();
  }, []); // El array vacío asegura que solo se ejecute una vez cuando el componente se monte

  return (
    <div>
      <h2>Lista de Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

