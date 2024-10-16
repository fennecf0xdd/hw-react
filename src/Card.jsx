import React from 'react';
import './Card.css';

const Card = (props) => {
  const { imageUrl, title, description } = props;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
