import React, { useEffect, useState } from "react";

import emailjs from "emailjs-com";

import "./Contact.css";
import { ContactImg } from "../../Data/data";

const apikeys = {
  USER_ID: "user_MQL0rObv6P5yFfgsdJtv1",
  TEMPLATE_ID: "template_9gtysyh",
  SERVICE_ID: "service_wjeew6p",
};

const Contact = () => {
  const [image, setImage] = useState();
  const [apiKeys, setApiKeys] = useState();

  useEffect(() => {
    setImage(ContactImg);
    setApiKeys(apikeys);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Merci pour votre message", result.text);
        },
        (error) => {
          alert("Une erreur c'est produite, veuillez réessayer", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__infos">
        <div className="contact__infos__description">
          <h1 className="contact__infos__description__title">Contact</h1>
          <p className="contact__infos__description__text">
            Prêt(e) à prendre rendez-vous, poser une question ou juste envie de
            discuter avec nous de vos besoins ? Notre équipe est là pour vous
            aider. Prendre contact avec nous n'a jamais été aussi facile grâce à
            notre formulaire de contact !
          </p>
        </div>
        {image ? (
          <img
            src={image}
            alt="Console mixage studio d'enregistrement musique"
            className="contact__infos__img"
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div className="contact__containerForm">
        <form className="contact__containerForm__form" onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nom, prénom"
            className="contact__containerForm__form__input"
            required
          />
          <input
            name="mail"
            type="email"
            placeholder="example@mail.com"
            className="contact__containerForm__form__input"
            required
          />
          <input
            name="tel"
            type="tel"
            placeholder="Téléphone (indiquer votre indicatif international 0033 ou +33...)"
            className="contact__containerForm__form__input"
            required
          />
          <textarea
            name="message"
            type="text"
            placeholder="Votre message..."
            className="contact__containerForm__form__textarea"
            required
          />
          <button className="contact__containerForm__form__button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
