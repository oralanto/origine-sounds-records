import React from "react";

import "./Contact.css";
import Desktop from "../../Assets/Images/Desktop.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__infos">
        <div className="contact__infos__description">
          <h1 className="contact__infos__description__title">Contact</h1>
          <p className="contact__infos__description__text">
            Prêt(e) à prendre rendez-vous, poser une question ou juste envie de
            discuter avec nous de vos besoins ? Notre équipe est là pour vous
            aider. Prendre contact avec nous n'a jamais été aussi facile !
          </p>
        </div>
        <img
          src={Desktop}
          alt="Console mixage studio d'enregistrement musique"
          className="contact__infos__img"
        />
      </div>
      <div className="contact__form">
        <h2 className="contact__form__title">
          Vous souhaitez en savoir plus ?
        </h2>
        <p className="contact__form__text">
          Contactez nous à cette adresse mail:{" "}
          <a
            target="_blank"
            href="mailto:originesounds.rec@gmail.com"
            rel="noreferrer"
            className="contact__form__text__link"
          >
            originesounds.rec@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
