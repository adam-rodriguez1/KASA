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
    return <div>...</div>;
  }

  const totalImages = logement.pictures.length;

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {logement.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`${logement.title} ${index + 1}`}
            className={`carousel-image ${currentImageIndex === index ? "active" : ""}`}
          />
        ))}

        {totalImages > 1 && (
          <>
            <button onClick={goToPrevious} className="arrow arrow-left">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button onClick={goToNext} className="arrow arrow-right">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}

        <div className="counter">
          {currentImageIndex + 1}/{totalImages}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
