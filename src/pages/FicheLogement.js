import React from "react";
//useParams est un "react hook" et permet de retourner depuis l'URL actuel sa valeur(il est possible de passer plusieurs valeurs)
import { useParams } from "react-router-dom";
import output from "../data/output.json";
import Carousel from "../components/Carousel.js";
import "./FicheLogement.scss";
import Collapse from "../components/Collapse";
import Stars from "../components/StarsRating .js";

const FicheLogement = () => {
  const { id } = useParams();

  const logement = output.find((logement) => logement.id === id);

  return (
    <div className="logement-body">
      <Carousel />
      <div className="main-flex">
        <div className="title-tags-wrapper">
          <h1>{logement.title}</h1>
          <p className="subtitle">{logement.location}</p>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index} className="tag-item">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="host-rating">
          <div className="host-wrapper">
            <p className="host-name">{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="image-host"></img>
          </div>
          <Stars rating={logement.rating} />
        </div>
      </div>
      <div className="collapse-logement">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipement"
          content={
            <ul className="pour-paddingliste">
              {logement.equipments.map((equipment, index) => (
                <li key={index} className="equipement-collapse">
                  {equipment}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default FicheLogement;
