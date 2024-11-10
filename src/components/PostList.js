// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };

    getPosts();
  }, []);

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
