import React from "react";
import Card from "./Card";
import output from "../data/output.json";
import "./Liste.scss";

const Liste = () => {
  return (
    <div className="cards-container">
      <div className="card-liste">
        {output.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Liste;
