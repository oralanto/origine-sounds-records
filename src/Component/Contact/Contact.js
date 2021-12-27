import React from "react";

import "./Contact.css";
import Desktop from "../../Assets/Images/Desktop.png";
import ContactForm from "./ContactForm";

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
          alt="Studio desktop"
          className="contact__infos__img"
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
