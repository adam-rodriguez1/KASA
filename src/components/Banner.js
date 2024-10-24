import React from "react";
import "./Banner.scss";
import imagedefonddacceuil from "../assets/imagedefondacceuil.png";

const Banner = ({
  showOverlay = true,
  showText = true,
  text = "Chez vous, partout et ailleurs",
  imageSrc = imagedefonddacceuil,
}) => {
  return (
    <div className="accueil">
      <div
        className={`banniere ${showOverlay ? "with-overlay" : ""}`}
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {showText && <p className="text-banniere">Chez vous,<br className="retour"></br> partout et ailleurs</p>}
      </div>
    </div>
  );
};

export default Banner;
