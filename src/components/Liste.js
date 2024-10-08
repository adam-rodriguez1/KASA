import React from 'react';
import Card from './Card'; 
import data from '../data/output.json'; 
import './Liste.scss'; 

const Liste = () => {
  return (
    <div className="card-liste">
      {data.map((produits) => (
        <Card
          key={produits.id} 
          title={produits.title} 
          cover={produits.cover} 
        />
      ))}
    </div>
  );
};

export default Liste;
