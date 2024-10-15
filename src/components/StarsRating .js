import React from 'react';
import etoilerempli from '../assets/etoilerempli.png'; // Import de l'étoile remplie
import etoilevide from '../assets/etoilevide.png'; // Import de l'étoile vide

const StarsRating = ({ rating }) => {
  const totalStars = 5;
  const stars = []; // Tableau pour stocker les étoiles

  let index = 0;

  // Boucle pour ajouter les étoiles remplies
  while (index < rating) {
    stars.push(<img key={index} src={etoilerempli} alt="Etoile remplie" className="star" width="24" height="24" />);
    index++;
  }

  // Boucle pour ajouter les étoiles vides jusqu'à 5
  while (index < totalStars) {
    stars.push(<img key={index} src={etoilevide} alt="Etoile vide" className="star" width="24" height="24" />);
    index++;
  }

  return <div className="stars-rating">{stars}</div>; // Rendu des étoiles
};

export default StarsRating;
