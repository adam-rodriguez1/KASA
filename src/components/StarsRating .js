import React from "react";
import etoilerempli from "../assets/etoilerempli.png";
import etoilevide from "../assets/etoilevide.png";

const StarsRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let index = 0; index < totalStars; index++) {
    if (index < rating) {
      stars.push(<img key={index} src={etoilerempli} alt="Etoile remplie" className="star" width="24" height="24" />);
    } else {
      stars.push(<img key={index} src={etoilevide} alt="Etoile vide" className="star" width="24" height="24" />);
    }
  }

  return <div className="stars-rating">{stars}</div>;
};

export default StarsRating;
