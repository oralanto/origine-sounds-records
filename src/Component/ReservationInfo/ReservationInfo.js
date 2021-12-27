import React from "react";

import "./ReservationInfo.css";
import Microphone2 from "../../Assets/Images/Microphone2.png";

const ReservationInfo = () => {
  return (
    <div className="reservationInfo">
      <h2 className="reservationInfo__title">Origine Sounds Records</h2>
      <img
        src={Microphone2}
        alt="Microphone"
        className="reservationInfo__img"
      />
      <p className="reservationInfo__text">
        Nous avons tous des emplois du temps surchargés. C'est pourquoi nous
        cherchons constamment à simplifier la vie de nos clients, par exemple,
        en facilitant la prise de rendez-vous ! Grâce à notre plateforme de
        réservation en ligne, prendre rendez-vous n'a jamais été aussi simple et
        pratique. Quels que soient vos tracas du quotidien, vous pourrez prendre
        rendez-vous n'importe quand, directement sur notre site. Choisissez
        l'horaire qui vous convient et confirmez votre rendez-vous en un clic.
      </p>
      <div className="reservationInfo__infos">
        <div className="reservationInfo__infos__items">
          <h2 className="reservationInfo__infos__items__title">
            Réserver en ligne
          </h2>
          <p className="reservationInfo__infos__items__text">
            Nos vies n'ont jamais été aussi remplies. Il est même parfois
            difficile de tout accomplir en une seule journée. Nous en avons
            conscience, c'est pourquoi sur notre site, vous pouvez directement
            prendre rendez-vous quand vous en avez envie : à toute heure, tous
            les jours de la semaine, 365 jours par an.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
