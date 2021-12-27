import React from "react";

import "./Accueil.css";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil__text">
        <div className="accueil__text__items">
          <h1 className="accueil__text__items__title">
            Origine Sounds Records
          </h1>
          <h2 className="accueil__text__items__subtitle">
            Un{" "}
            <span className="accueil__text__items__subtitle__span">Lieu</span>{" "}
            unique pour un{" "}
            <span className="accueil__text__items__subtitle__span">Son</span>{" "}
            unique !
          </h2>
          <p className="accueil__text__items__text">
            Votre projet est notre projet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
