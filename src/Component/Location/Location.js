import React from "react";

import "./Location.css";
import Map from "../../Assets/Images/map.png";

const Location = () => {
  return (
    <div className="location">
      <h2 className="location__title">Où nous trouver ?</h2>
      <img
        className="location__map"
        src={Map}
        alt="map localisation studio saint julien en genevois"
      />
      <div className="location__infos">
        <div className="location__infos__item">
          <p className="location__infos__item__title">Contact</p>
          <p className="location__infos__item__text">
            originesounds.rec@gmail.com
          </p>
        </div>
        <div className="location__infos__item">
          <p className="location__infos__item__title">Adresse</p>
          <p className="location__infos__item__text">3 Avenue de la gare</p>
          <p className="location__infos__item__text">
            74160 Saint-Julien-en-Genevois
          </p>
        </div>
        <div className="location__infos__item">
          <p className="location__infos__item__title">Horaires</p>
          <p className="location__infos__item__text">24h/24</p>
          <p className="location__infos__item__text">7j/7</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
