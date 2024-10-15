import React from 'react';
import './Card.scss';
import { useNavigate } from "react-router-dom";

function Card({ logement }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/FicheLogement/${logement.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={logement.cover} alt={logement.title} className="card-image" />
      <p className="card-title">{logement.title}</p>
    </div>
  );
}

export default Card;
