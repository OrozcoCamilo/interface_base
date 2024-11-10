// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
