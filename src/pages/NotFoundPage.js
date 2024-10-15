import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
const NotFoundPage = () => {
  return (
    <div className="quatrecentsquatre-wrapper">
      <p className="quatrecentsquatre">404</p>
      <p className="soustexte-quatrecentsquatre">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">
        <p className="quatrecentsquatre-link">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
