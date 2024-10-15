import React, { useState } from "react";
import { useParams } from "react-router-dom";
import output from "../data/output.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.scss";

const Carousel = () => {
  const { id } = useParams();
  const logement = output.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé...</div>;
  }

  return (
    <div className="carousel">
      <div className="carousel-images">
        {/* images *********************************************************************************************/}
        {logement.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`${logement.title} ${index + 1}`}
            className="carousel-image"
            style={{ display: currentImageIndex === index ? "block" : "none" }} // Afficher uniquement l'image actuelle
          />
        ))}
        {/*****************************************************************************************************/}
        {/*Bouton gauche***************************************************************************************/}
        {currentImageIndex > 0 && (
          <button onClick={() => setCurrentImageIndex(currentImageIndex - 1)} className="arrow arrow-left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {/**************************************************************************************************** */}
        {currentImageIndex < logement.pictures.length - 1 && (
          <button onClick={() => setCurrentImageIndex(currentImageIndex + 1)} className="arrow arrow-right">
            <FontAwesomeIcon icon={faChevronRight} /> {/* Flèche droite */}
          </button>
        )}
        {/* Compteur **************************************************************************************************************************/}
        <div className="counter">
          {currentImageIndex + 1}/{logement.pictures.length}
        </div>
        {/**************************************************************************************************************** */}
      </div>
    </div>
  );
};

export default Carousel;
